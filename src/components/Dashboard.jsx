import React, { useState } from 'react';
import { conversationsData } from '../data/conversationsData';
import ConversationCard from './ConversationCard';
import StatsCard from './StatsCard';
import { Users, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('pre-sales');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Calculate stats for pre-sales
  const preSalesStats = {
    total: conversationsData.preSales.length,
    high: conversationsData.preSales.filter(c => c.priority === 'high').length,
    totalValue: conversationsData.preSales.reduce((sum, c) => 
      sum + parseInt(c.expectedValue.replace(/[$,]/g, '')), 0
    ),
    active: conversationsData.preSales.filter(c => c.status === 'active').length
  };

  // Calculate stats for post-sales
  const postSalesStats = {
    total: conversationsData.postSales.length,
    atRisk: conversationsData.postSales.filter(c => c.accountHealth === 'at-risk').length,
    totalValue: conversationsData.postSales.reduce((sum, c) => 
      sum + parseInt(c.contractValue.replace(/[$,]/g, '')), 0
    ),
    healthy: conversationsData.postSales.filter(c => c.accountHealth === 'healthy').length
  };

  // Filter conversations
  const filterConversations = (conversations) => {
    return conversations.filter(conv => {
      const priorityMatch = filterPriority === 'all' || conv.priority === filterPriority;
      const statusMatch = filterStatus === 'all' || 
        (activeTab === 'pre-sales' ? conv.status === filterStatus : conv.accountHealth === filterStatus);
      return priorityMatch && statusMatch;
    });
  };

  const currentConversations = activeTab === 'pre-sales' 
    ? filterConversations(conversationsData.preSales)
    : filterConversations(conversationsData.postSales);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Sales Conversations Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage and track all your sales conversations in one place</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => {
              setActiveTab('pre-sales');
              setFilterStatus('all');
            }}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
              activeTab === 'pre-sales'
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            Pre-Sales Conversations
          </button>
          <button
            onClick={() => {
              setActiveTab('post-sales');
              setFilterStatus('all');
            }}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
              activeTab === 'post-sales'
                ? 'bg-green-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            Post-Sales Conversations
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {activeTab === 'pre-sales' ? (
            <>
              <StatsCard
                title="Total Prospects"
                value={preSalesStats.total}
                icon={Users}
                color="blue"
                subtitle="Active opportunities"
              />
              <StatsCard
                title="High Priority"
                value={preSalesStats.high}
                icon={AlertTriangle}
                color="red"
                subtitle="Need immediate attention"
              />
              <StatsCard
                title="Pipeline Value"
                value={`$${(preSalesStats.totalValue / 1000).toFixed(0)}K`}
                icon={DollarSign}
                color="green"
                subtitle="Expected revenue"
              />
              <StatsCard
                title="Active Deals"
                value={preSalesStats.active}
                icon={TrendingUp}
                color="purple"
                subtitle="In progress"
              />
            </>
          ) : (
            <>
              <StatsCard
                title="Total Accounts"
                value={postSalesStats.total}
                icon={Users}
                color="indigo"
                subtitle="Active customers"
              />
              <StatsCard
                title="At Risk"
                value={postSalesStats.atRisk}
                icon={AlertTriangle}
                color="red"
                subtitle="Need attention"
              />
              <StatsCard
                title="Contract Value"
                value={`$${(postSalesStats.totalValue / 1000).toFixed(0)}K`}
                icon={DollarSign}
                color="green"
                subtitle="Annual recurring"
              />
              <StatsCard
                title="Healthy Accounts"
                value={postSalesStats.healthy}
                icon={CheckCircle}
                color="green"
                subtitle="Good standing"
              />
            </>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap gap-4 items-center">
          <span className="font-semibold text-gray-700">Filters:</span>
          
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Priority:</label>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">
              {activeTab === 'pre-sales' ? 'Status:' : 'Health:'}
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All</option>
              {activeTab === 'pre-sales' ? (
                <>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                </>
              ) : (
                <>
                  <option value="healthy">Healthy</option>
                  <option value="at-risk">At Risk</option>
                  <option value="stable">Stable</option>
                </>
              )}
            </select>
          </div>

          <div className="ml-auto text-sm text-gray-600">
            Showing <span className="font-semibold">{currentConversations.length}</span> of{' '}
            <span className="font-semibold">
              {activeTab === 'pre-sales' ? conversationsData.preSales.length : conversationsData.postSales.length}
            </span>{' '}
            conversations
          </div>
        </div>

        {/* Conversations Grid */}
        {currentConversations.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentConversations.map((conversation) => (
              <ConversationCard
                key={conversation.id}
                conversation={conversation}
                type={activeTab}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No conversations found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
