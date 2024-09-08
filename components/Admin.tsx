'use client';
import { useEffect, useState } from 'react';
import Footer from './Footer';

interface PledgeData {
  id: number;
  region: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  created_at: string;
}

export default function Admin() {
  const [pledges, setPledges] = useState<PledgeData[]>([]);

  useEffect(() => {
    const fetchPledges = async () => {
      try {
        const response = await fetch('/api/submit-pledge');
        const data = await response.json();
        if (data.success) {
          setPledges(data.pledges);
        } else {
          console.error('Failed to fetch pledges:', data.error);
        }
      } catch (error) {
        console.error('Error fetching pledges:', error);
      }
    };

    fetchPledges();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow overflow-x-auto">
        <table className="table table-zebra mt-20">
          <thead>
            <tr>
              <th></th>
              <th>Region</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pledges.map((pledge, index) => (
              <tr key={pledge.id}>
                <th>{index + 1}</th>
                <td>{pledge.region}</td>
                <td>
                  {pledge.first_name} {pledge.last_name}
                </td>
                <td>{pledge.age}</td>
                <td>{pledge.email}</td>
                <td>
                  {new Date(pledge.created_at).toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
