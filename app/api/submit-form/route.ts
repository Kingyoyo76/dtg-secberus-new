import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = '48646825';
const HUBSPOT_FORM_GUID = '58b94af0-99ef-4177-a780-c1e12c3462f1';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Format the data for HubSpot's form submission API
    const formData = new URLSearchParams();
    formData.append('firstname', data.firstName);
    formData.append('lastname', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phoneNumber);
    formData.append('company', data.companyName);
    if (data.message) {
      formData.append('message', data.message);
    }

    // Submit to HubSpot's form submission endpoint
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: data.firstName },
            { name: 'lastname', value: data.lastName },
            { name: 'email', value: data.email },
            { name: 'phone', value: data.phoneNumber },
            { name: 'company', value: data.companyName },
            ...(data.message ? [{ name: 'message', value: data.message }] : []),
          ],
          context: {
            pageUri: request.url,
            pageName: "Trial Sign Up"
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit to HubSpot' },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
