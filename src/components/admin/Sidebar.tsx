import { Link, useLocation } from 'react-router-dom';
import {
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  ArchiveBoxIcon,
  MapIcon,
  CalendarIcon,
  BanknotesIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
import { COMPANY_NAME } from '@zenra/constants';

const navigation = [
  { name: 'Dashboard', icon: ChartBarIcon, path: '/admin' },
  { name: 'Bookings', icon: CalendarIcon, path: '/admin/bookings' },
  { name: 'Packages', icon: ArchiveBoxIcon, path: '/admin/packages' },
  { name: 'Destinations', icon: MapIcon, path: '/admin/destinations' },
  { name: 'Users', icon: UsersIcon, path: '/admin/users' },
  { name: 'Payments', icon: BanknotesIcon, path: '/admin/payments' },
  { name: 'Reviews', icon: ChatBubbleLeftIcon, path: '/admin/reviews' },
  { name: 'Settings', icon: CogIcon, path: '/admin/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="flex h-full flex-col overflow-y-auto bg-gray-900 w-64 py-4 px-3">
        <div className="flex items-center justify-between mb-8 px-2">
          <Link to="/" className="text-xl font-bold text-white">
            {COMPANY_NAME}
          </Link>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t border-gray-800">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Admin"
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};