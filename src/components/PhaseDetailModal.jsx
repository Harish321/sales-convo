import React from 'react';
import { Mail, Phone, Video, DollarSign, TrendingUp } from 'lucide-react';

const PhaseDetailModal = ({ phase, position, onClose }) => {
  if (!phase) return null;

  const getActivityIcon = (type) => {
    switch (type) {
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'call':
        return <Phone className="w-5 h-5" />;
      case 'meeting':
      case 'demo':
        return <Video className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'email':
        return 'bg-blue-100 text-blue-600';
      case 'call':
        return 'bg-green-100 text-green-600';
      case 'meeting':
      case 'demo':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getChannelIcon = (channel) => {
    switch (channel.toLowerCase()) {
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'call':
        return <Phone className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className="fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 w-[500px]"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">
              {phase.monthYear || phase.month}
            </h3>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
              {phase.stage}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {phase.dealValue && (
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <span className="text-lg font-semibold text-gray-900">
                  {phase.dealValue}
                </span>
              </div>
            )}
            {phase.probability && (
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {phase.probability} prob
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Key Milestone */}
        {phase.keyMilestone && (
          <div className="px-6 py-4 bg-green-50 border-b border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Key Milestone</div>
            <div className="text-sm font-semibold text-gray-900">
              {phase.keyMilestone}
            </div>
          </div>
        )}

        {/* Activities */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">
            Activities ({phase.activities})
          </h4>

          <div className="space-y-4">
            {phase.activityDetails && phase.activityDetails.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getIconColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-gray-500">{activity.date}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {activity.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {phase.channels && (
            <div className="mb-3">
              <div className="text-xs text-gray-600 mb-2">Channels Used</div>
              <div className="flex gap-2">
                {phase.channels.map((channel, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 flex items-center gap-1.5"
                  >
                    {getChannelIcon(channel)}
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          )}
          {phase.owner && (
            <div className="text-xs text-gray-600">
              Owner: <span className="font-medium text-gray-900">{phase.owner}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PhaseDetailModal;
