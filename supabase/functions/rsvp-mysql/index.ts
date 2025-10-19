import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey, X-Admin-Password",
};

interface RSVPData {
  name: string;
  email: string;
  attendance: string;
  menu?: string;
  allergies?: string;
  carpooling: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    const mysql = await import("npm:mysql2@3.6.5/promise");
    const connection = await mysql.createConnection({
      host: "5.196.93.228",
      port: 4306,
      user: "admin",
      password: "kP7mL4z8XqT2",
      database: "mmocore",
    });

    // POST - Save RSVP
    if (req.method === "POST") {
      const rsvpData: RSVPData = await req.json();
      
      if (!rsvpData.name || !rsvpData.email || !rsvpData.attendance) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const [result] = await connection.execute(
        `INSERT INTO rsvps (name, email, attendance, menu, allergies, carpooling, message, submitted_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          rsvpData.name,
          rsvpData.email,
          rsvpData.attendance,
          rsvpData.menu || null,
          rsvpData.allergies || null,
          rsvpData.carpooling || 'no',
          rsvpData.message || null,
        ]
      );

      await connection.end();

      return new Response(
        JSON.stringify({
          success: true,
          message: "RSVP saved successfully",
          id: (result as any).insertId
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // GET - Fetch all RSVPs (admin only)
    if (req.method === "GET") {
      const adminPassword = req.headers.get('X-Admin-Password');

      if (adminPassword !== 'AdminSimonTalia2026') {
        await connection.end();
        return new Response(
          JSON.stringify({ error: "Unauthorized" }),
          {
            status: 401,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const [rsvps] = await connection.query(
        `SELECT * FROM rsvps ORDER BY submitted_at DESC`
      );

      const formattedRsvps = (rsvps as any[]).map((rsvp: any) => ({
        ...rsvp,
        submitted_date: new Date(rsvp.submitted_at).toLocaleDateString('fr-FR'),
        submitted_time: new Date(rsvp.submitted_at).toLocaleTimeString('fr-FR'),
      }));

      const stats = {
        total: (rsvps as any[]).length,
        attending: (rsvps as any[]).filter((r: any) => r.attendance === 'yes').length,
        notAttending: (rsvps as any[]).filter((r: any) => r.attendance === 'no').length,
        menuClassique: (rsvps as any[]).filter((r: any) => r.menu === 'classique' && r.attendance === 'yes').length,
        menuJardin: (rsvps as any[]).filter((r: any) => r.menu === 'jardin' && r.attendance === 'yes').length,
        carpooling: (rsvps as any[]).filter((r: any) => r.carpooling === 'yes').length,
      };

      await connection.end();

      return new Response(
        JSON.stringify({ rsvps: formattedRsvps, stats }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    await connection.end();

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});