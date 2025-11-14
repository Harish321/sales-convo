import React, { useState } from 'react';
import { Calendar, Users, Activity, DollarSign, X, Filter } from 'lucide-react';
import PhaseDetailModal from './PhaseDetailModal';

const CustomerJourneyTimeline = ({ conversation, type, onClose }) => {
  const [hoveredPhase, setHoveredPhase] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const getPhaseColor = (phaseType) => {
    switch (phaseType) {
      case 'presales':
        return 'bg-blue-500';
      case 'sales':
      case 'closed':
        return 'bg-green-500';
      case 'onboarding':
        return 'bg-purple-600';
      case 'active':
        return 'bg-indigo-400';
      default:
        return 'bg-gray-500';
    }
  };

  const getPhaseLabel = (phaseType) => {
    switch (phaseType) {
      case 'presales':
        return 'Presales Phase';
      case 'sales':
      case 'closed':
        return 'Sales & Closed';
      case 'onboarding':
        return 'Onboarding';
      case 'active':
        return 'Active Customer';
      default:
        return 'Unknown';
    }
  };

  if (!conversation.timeline) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Customer Journey Timeline</h2>
            <p className="text-gray-600 text-sm">Key activities and touchpoints across stages ({conversation.customerName})</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filters Section */}
        <div className="px-8 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 font-medium">Filters:</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Opportunity:</span>
              <select className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>{conversation.id} - {conversation.customerName.substring(0, 3)}</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Date Range:</span>
              <select className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Time</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Stage:</span>
              <select className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Stages</option>
              </select>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-5 gap-6 px-8 py-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600 mb-2">Total Duration</div>
            <div className="text-3xl font-bold text-gray-900">{conversation.timeline.totalDuration} <span className="text-base font-normal text-gray-600">days</span></div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600 mb-2">Total Activities</div>
            <div className="text-3xl font-bold text-gray-900">{conversation.timeline.totalActivities}</div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600 mb-2">People Involved</div>
            <div className="text-3xl font-bold text-gray-900">{conversation.timeline.peopleInvolved}</div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600 mb-2">Final Deal Size</div>
            <div className="text-3xl font-bold text-gray-900">
              {type === 'pre-sales' ? conversation.expectedValue : conversation.timeline.finalDealSize}
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600 mb-2">Status</div>
            <div className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
              type === 'post-sales' && conversation.accountHealth === 'healthy' 
                ? 'bg-green-100 text-green-700'
                : type === 'post-sales' && conversation.accountHealth === 'at-risk'
                ? 'bg-red-100 text-red-700'
                : 'bg-blue-100 text-blue-700'
            }`}>
              {type === 'post-sales' 
                ? conversation.accountHealth?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
                : conversation.status.replace(/\b\w/g, l => l.toUpperCase())
              }
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="px-8 py-6">
          <div className="flex gap-0 rounded-xl overflow-hidden shadow-lg mb-8">
            {conversation.timeline.phases.map((phase, index) => (
              <div
                key={index}
                className={`${getPhaseColor(phase.type)} text-white px-6 py-8 flex-1 relative cursor-pointer hover:opacity-90 transition-opacity`}
                style={{ minWidth: '200px' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setModalPosition({
                    top: rect.bottom + 10,
                    left: rect.left
                  });
                  setHoveredPhase(phase);
                }}
                onMouseLeave={() => {
                  // Small delay before hiding to allow moving to modal
                  setTimeout(() => setHoveredPhase(null), 100);
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Calendar className="w-6 h-6 opacity-90" />
                  <span className="bg-white bg-opacity-25 px-2.5 py-1 rounded text-xs font-semibold">
                    {phase.activities} activities
                  </span>
                </div>
                <div className="text-2xl font-bold mb-2">{phase.month}</div>
                <div className="text-sm font-medium opacity-95">{phase.stage}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded bg-blue-500"></div>
              <span className="text-sm text-gray-700 font-medium">Presales Phase</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className="text-sm text-gray-700 font-medium">Sales & Closed</span>
            </div>
            {type === 'post-sales' && (
              <>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded bg-purple-600"></div>
                  <span className="text-sm text-gray-700 font-medium">Onboarding</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded bg-indigo-400"></div>
                  <span className="text-sm text-gray-700 font-medium">Active Customer</span>
                </div>
              </>
            )}
          </div>

          {/* How to use section */}
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">💡</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">How to use this timeline</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Hover over any month to see detailed activities, key milestones, and touchpoints. 
                  Use filters above to focus on specific opportunities, date ranges, or journey stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Detail Modal on Hover */}
      {hoveredPhase && (
        <PhaseDetailModal
          phase={hoveredPhase}
          position={modalPosition}
          onClose={() => setHoveredPhase(null)}
        />
      )}
    </div>
  );
};

export default CustomerJourneyTimeline;
