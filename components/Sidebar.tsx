"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={40}
            height={40}
            alt="Horizon logo"
            className="max-w-[24px]"
          />
          <h1 className="sidebar-logo">
            Horizon
          </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              key={item.route}
              href={item.route}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative w-6 h-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                })}
                />
              </div>
              <p className={cn('text-16 font- text-black-2', {'!text-white': isActive})}>
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className="mt-auto">
          <p className="text-sm font-medium">User: {user.firstName} {user.lastName}</p>
        </div>
      </nav>
      <footer className="mt-8">
        <p>FOOTER</p>
      </footer>
    </section>
  );
};

export default Sidebar;
