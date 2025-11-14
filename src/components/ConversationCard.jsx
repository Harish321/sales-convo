import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Calendar, DollarSign, AlertCircle, TrendingUp, User, Clock } from 'lucide-react';
import CustomerJourneyTimeline from './CustomerJourneyTimeline';

const ConversationCard = ({ conversation, type }) => {
  const [expanded, setExpanded] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status, accountHealth) => {
    if (type === 'post-sales') {
      if (accountHealth === 'at-risk') return 'bg-red-100 text-red-800 border-red-300';
      if (accountHealth === 'healthy') return 'bg-green-100 text-green-800 border-green-300';
      return 'bg-blue-100 text-blue-800 border-blue-300';
    }
    return status === 'active' 
      ? 'bg-green-100 text-green-800 border-green-300' 
      : 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {conversation.customerName}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <User className="w-4 h-4 mr-1" />
              <span>{conversation.contactPerson}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(conversation.priority)}`}>
              {conversation.priority.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(conversation.status, conversation.accountHealth)}`}>
              {type === 'post-sales' && conversation.accountHealth 
                ? conversation.accountHealth.replace('-', ' ').toUpperCase() 
                : conversation.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-blue-500" />
            <span className="truncate">{conversation.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2 text-green-500" />
            <span>{conversation.phone}</span>
          </div>
        </div>

        {/* Product & Value */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="flex items-start justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Product:</span>
            <span className="text-sm text-gray-900 text-right">{conversation.product}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {type === 'pre-sales' ? 'Expected Value:' : 'Contract Value:'}
            </span>
            <span className="text-lg font-bold text-green-600 flex items-center">
              <DollarSign className="w-4 h-4" />
              {type === 'pre-sales' ? conversation.expectedValue : conversation.contractValue}
            </span>
          </div>
        </div>

        {/* Stage/Status specific info */}
        {type === 'pre-sales' && (
          <div className="flex items-center justify-between text-sm mb-4">
            <div className="flex items-center text-gray-600">
              <TrendingUp className="w-4 h-4 mr-2 text-purple-500" />
              <span className="font-medium">Stage:</span>
            </div>
            <span className="text-gray-900 font-semibold">{conversation.stage}</span>
          </div>
        )}

        {type === 'post-sales' && conversation.renewalDate && (
          <div className="flex items-center justify-between text-sm mb-4 bg-blue-50 rounded p-2">
            <span className="text-gray-700 font-medium">Renewal Date:</span>
            <span className="text-blue-700 font-semibold">{conversation.renewalDate}</span>
          </div>
        )}

        {/* Dates */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-sm">
            <span className="text-gray-600 block mb-1">Last Contact</span>
            <div className="flex items-center text-gray-900">
              <Calendar className="w-4 h-4 mr-1 text-blue-500" />
              <span className="font-medium">{conversation.lastContact}</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-gray-600 block mb-1">
              {type === 'pre-sales' ? 'Next Follow-up' : 'Next Check-in'}
            </span>
            <div className="flex items-center text-gray-900">
              <Calendar className="w-4 h-4 mr-1 text-orange-500" />
              <span className="font-medium">
                {type === 'pre-sales' ? conversation.nextFollowUp : conversation.nextCheckIn}
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <div className="flex items-start text-sm">
            <AlertCircle className="w-4 h-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600 italic">{conversation.notes}</p>
          </div>
        </div>

        {/* Tickets (Post-sales only) */}
        {type === 'post-sales' && conversation.tickets && conversation.tickets.length > 0 && (
          <div className="mb-4 bg-yellow-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Open Tickets:</h4>
            {conversation.tickets.map(ticket => (
              <div key={ticket.id} className="text-xs text-gray-600 mb-1">
                <span className="font-medium">{ticket.id}</span> - {ticket.description} 
                <span className={`ml-2 px-2 py-0.5 rounded ${
                  ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                  ticket.status === 'High Priority' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 border-t border-gray-200 pt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm py-2 hover:bg-blue-50 rounded transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{expanded ? 'Hide' : 'Messages'} ({conversation.messages.length})</span>
          </button>
          {conversation.timeline && (
            <button
              onClick={() => setShowTimeline(true)}
              className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm py-2 hover:bg-purple-50 rounded transition-colors"
            >
              <Clock className="w-4 h-4" />
              <span>View Timeline</span>
            </button>
          )}
        </div>

        {/* Messages */}
        {expanded && (
          <div className="mt-4 space-y-3 max-h-80 overflow-y-auto">
            {conversation.messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg ${
                  message.sender.includes('Rep') || message.sender.includes('Manager')
                    ? 'bg-blue-50 border-l-4 border-blue-500'
                    : 'bg-gray-50 border-l-4 border-gray-400'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-semibold text-gray-900">{message.sender}</span>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <p className="text-sm text-gray-700">{message.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Timeline Modal */}
      {showTimeline && (
        <CustomerJourneyTimeline
          conversation={conversation}
          type={type}
          onClose={() => setShowTimeline(false)}
        />
      )}
    </div>
  );
};

export default ConversationCard;
