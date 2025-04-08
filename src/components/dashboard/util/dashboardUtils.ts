
import { useMemo } from "react";

export interface ActivityMetric {
  name: string;
  statements: number;
  cases: number;
  transactions: number;
  users: number;
}

export interface Comparison {
  current: number;
  previous: number;
  change: string;
}

export interface WeeklyComparison {
  transactions: Comparison;
  users: Comparison;
}

export interface UserCohort {
  period: string;
  newUsers: number;
  returningUsers: number;
  conversionRate: string;
}

export const calculateTotals = (data: ActivityMetric[]) => {
  return {
    totalStatements: data.reduce((sum, day) => sum + day.statements, 0),
    totalCases: data.reduce((sum, day) => sum + day.cases, 0),
    totalTransactions: data.reduce((sum, day) => sum + day.transactions, 0),
    totalUsers: data.reduce((sum, day) => sum + day.users, 0),
  };
};

export const generateWeeklyComparison = (totalTransactions: number, totalUsers: number): WeeklyComparison => ({
  transactions: { 
    current: totalTransactions, 
    previous: totalTransactions * 0.85, 
    change: '+17.6%' 
  },
  users: { 
    current: totalUsers, 
    previous: totalUsers * 0.92, 
    change: '+8.7%' 
  }
});

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};
