"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: number;
  description?: string;
  icon: ReactNode;
  color: "blue" | "emerald" | "amber" | "rose";
};

const colors = {
  blue: {
    bg: "bg-blue-500",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  emerald: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  amber: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
  rose: {
    bg: "bg-rose-500",
    light: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
  },
};

export default function StatCard({
  title,
  value,
  description,
  icon,
  color,
}: StatCardProps) {
  const style = colors[color];

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        ${style.border}
        bg-white/80
        p-6
        shadow-sm
        backdrop-blur
        transition-all
        hover:shadow-xl
      `}
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          ${style.light}
          blur-3xl
          opacity-70
        `}
      />

      {/* Header */}

      <div className="relative flex items-start justify-between">
        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${style.bg}
            text-white
            shadow-lg
          `}
        >
          {icon}
        </div>

        <div
          className={`
            flex
            items-center
            gap-1
            rounded-full
            ${style.light}
            px-3
            py-1
            text-xs
            font-semibold
            ${style.text}
          `}
        >
          <ArrowUpRight size={14} />
          Aktif
        </div>
      </div>

      {/* Content */}

      <div className="relative mt-8">
        <p className="text-sm font-medium text-slate-500">{title}</p>

        <h3 className="mt-2 text-5xl font-black tracking-tight text-slate-900">
          {value}
        </h3>

        {description && (
          <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
        )}
      </div>

      {/* Bottom Accent */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-1
          w-0
          ${style.bg}
          transition-all
          duration-500
          group-hover:w-full
        `}
      />
    </motion.div>
  );
}
