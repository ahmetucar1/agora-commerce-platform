'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Ürünler', href: '/admin/products', icon: '📦' },
    { label: 'Kategoriler', href: '/admin/categories', icon: '🏷️' },
    { label: 'Siparisler', href: '/admin/orders', icon: '📋' },
    { label: 'Müşteriler', href: '/admin/customers', icon: '👥' },
    { label: 'Ayarlar', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-700">
          {isOpen && <h1 className="text-xl font-bold">Agora Admin</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-slate-800 p-2 rounded"
          >
            {isOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-slate-800 transition"
            >
              <span>{item.icon}</span>
              {isOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          {isOpen && (
            <button className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm">
              Çıkış Yap
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </h2>
          <div className="text-slate-600 dark:text-slate-300">Admin Panel</div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Stats */}
            {[
              { title: 'Toplam Ürün', value: '0', icon: '📦' },
              { title: 'Toplam Sipariş', value: '0', icon: '📋' },
              { title: 'Müşteriler', value: '0', icon: '👥' },
              { title: 'Gelir (Ay)', value: '₺0', icon: '💰' },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border-l-4 border-orange-600"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Hızlı İşlemler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/admin/products/new"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded text-center transition"
              >
                Yeni Ürün Ekle
              </Link>
              <Link
                href="/admin/orders"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded text-center transition"
              >
                Siparişleri Görüntüle
              </Link>
              <Link
                href="/admin/settings"
                className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-3 rounded text-center transition"
              >
                Ayarlar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
