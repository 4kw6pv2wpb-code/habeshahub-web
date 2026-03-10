'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Avatar } from '@/components/ui/Avatar';
import { FiSearch, FiSend, FiSmile, FiPaperclip, FiArrowLeft, FiMoreVertical } from 'react-icons/fi';

const CONVERSATIONS = [
  { id: 1, name: 'Selam Tekle', lastMsg: 'See you at the event tonight! 🎉', time: '2m', unread: 2, online: true },
  { id: 2, name: 'Dawit Mekonnen', lastMsg: 'Did you check out that apartment?', time: '1h', unread: 0, online: true },
  { id: 3, name: 'Hiwet G.', lastMsg: 'The job interview went great!', time: '3h', unread: 1, online: false },
  { id: 4, name: 'Habesha Community Group', lastMsg: 'Next meetup is Saturday at 3pm', time: '5h', unread: 5, online: false },
  { id: 5, name: 'Kidist A.', lastMsg: 'Can you bring injera to the potluck?', time: '1d', unread: 0, online: false },
  { id: 6, name: 'Meron Berhe', lastMsg: 'Check out my new jewelry designs!', time: '2d', unread: 0, online: true },
];

const MOCK_MESSAGES = [
  { id: 1, sender: 'them', text: 'Hey! Are you coming to the Habesha Night event this Saturday?', time: '6:30 PM' },
  { id: 2, sender: 'me', text: 'Yes definitely! I already got my ticket. So excited 🎉', time: '6:32 PM' },
  { id: 3, sender: 'them', text: 'Amazing! I\'m going with Dawit and Hiwet. We should all meet up before', time: '6:33 PM' },
  { id: 4, sender: 'me', text: 'Perfect, let\'s meet at Buna Coffee at 7pm and walk over together?', time: '6:35 PM' },
  { id: 5, sender: 'them', text: 'Love that plan! I\'ll tell the others', time: '6:36 PM' },
  { id: 6, sender: 'them', text: 'See you at the event tonight! 🎉', time: '7:45 PM' },
];

export default function MessagesPage() {
  const [activeConvo, setActiveConvo] = useState(null);
  const [newMsg, setNewMsg] = useState('');
  const [search, setSearch] = useState('');

  const active = CONVERSATIONS.find(c => c.id === activeConvo);

  return (
    <AppLayout>
      <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-6xl lg:pb-0 pb-16">
        {/* Conversation List */}
        <div className={`${activeConvo ? 'hidden lg:flex' : 'flex'} w-full flex-col border-r border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800 lg:w-80`}>
          <div className="border-b border-gray-100 p-4 dark:border-dark-700">
            <h1 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Messages</h1>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Search conversations..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-dark-600 dark:bg-dark-700 dark:text-white" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase())).map(convo => (
              <button key={convo.id} onClick={() => setActiveConvo(convo.id)} className={`flex w-full items-center gap-3 border-b border-gray-50 px-4 py-3 text-left hover:bg-gray-50 dark:border-dark-700/50 dark:hover:bg-dark-700/50 ${activeConvo === convo.id ? 'bg-primary/5' : ''}`}>
                <Avatar name={convo.name} size="md" online={convo.online} />
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${convo.unread ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-700 dark:text-gray-300'}`}>{convo.name}</span>
                    <span className="text-xs text-gray-400">{convo.time}</span>
                  </div>
                  <p className={`truncate text-xs ${convo.unread ? 'font-medium text-gray-700 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>{convo.lastMsg}</p>
                </div>
                {convo.unread > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">{convo.unread}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Chat View */}
        <div className={`${activeConvo ? 'flex' : 'hidden lg:flex'} flex-1 flex-col bg-gray-50 dark:bg-dark-900`}>
          {active ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 dark:border-dark-700 dark:bg-dark-800">
                <button onClick={() => setActiveConvo(null)} className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700 lg:hidden"><FiArrowLeft size={20} /></button>
                <Avatar name={active.name} size="md" online={active.online} />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">{active.name}</p>
                  <p className="text-xs text-gray-500">{active.online ? 'Online' : 'Offline'}</p>
                </div>
                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700"><FiMoreVertical size={18} /></button>
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-3 overflow-y-auto p-4">
                <div className="text-center text-xs text-gray-400">Today</div>
                {MOCK_MESSAGES.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-white text-gray-800 shadow-sm dark:bg-dark-800 dark:text-gray-200'}`}>
                      <p className="text-sm">{msg.text}</p>
                      <p className={`mt-0.5 text-right text-[10px] ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 bg-white p-3 dark:border-dark-700 dark:bg-dark-800">
                <div className="flex items-center gap-2">
                  <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700"><FiSmile size={20} /></button>
                  <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700"><FiPaperclip size={20} /></button>
                  <input type="text" value={newMsg} onChange={(e) => setNewMsg(e.target.value)} placeholder="Type a message..." className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-dark-600 dark:bg-dark-700 dark:text-white" />
                  <button className="rounded-full bg-primary p-2.5 text-white hover:bg-primary/90"><FiSend size={18} /></button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-6"><FiSend size={32} className="text-primary" /></div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Messages</h2>
              <p className="mt-1 text-sm text-gray-500">Select a conversation to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
