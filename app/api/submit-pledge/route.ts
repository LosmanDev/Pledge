import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const supabase = createClient();
  const pledgeData = await request.json();

  try {
    const { data, error } = await supabase.from('pledges').insert([pledgeData]);

    if (error) throw error;

    const { count, error: countError } = await supabase
      .from('pledges')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;

    return NextResponse.json({ success: true, data, totalPledges: count });
  } catch (error) {
    console.log('Error Inserting pledge:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit pledge' },
      { status: 500 },
    );
  }
}

export async function GET() {
  const supabase = createClient();

  try {
    const { data, count, error } = await supabase
      .from('pledges')
      .select('*', { count: 'exact' });

    if (error) throw error;

    console.log('Total pledges:', count);

    return NextResponse.json({
      success: true,
      pledges: data,
      totalPledges: count,
    });
  } catch (error) {
    console.log('Error fetching pledge count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pledge count' },
      { status: 500 },
    );
  }
}
