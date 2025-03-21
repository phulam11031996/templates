export const templatesToDelete = [
  // { name: "default_template_1", isPublic: true },
  // { name: "default_template_2", isPublic: true },
  // { name: "default_template_3", isPublic: true },
  // { name: "default_template_4", isPublic: true },
  // { name: "default_template_5", isPublic: true },
  // { name: "default_template_6", isPublic: true },
  // { name: "default_template_7", isPublic: true },
  // { name: "default_template_8", isPublic: true },
  { name: "default_template_9", isPublic: true },
  // Add more templates as needed
];

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const isDev = process.env.ISDEV?.toLowerCase() === "true" ?? true;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Function to login and retrieve access token
async function loginWithEmailAndPassword(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { accessToken: data.session.access_token, userId: data.user.id };
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
}

// Function to fetch clinic UUID
async function getClinicUUID(accessToken, userId) {
  const url = `https://${isDev ? "api-staging" : "api"}.clinicos.ai/clinics/v1/user/${userId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.user_info[0].clinic_id;
  } catch (error) {
    console.error("Error calling Clinicos API:", error);
    throw error;
  }
}

// Function to delete a template using DELETE API
async function deleteTemplate(accessToken, clinicUUID, template) {
  const url = `https://${isDev ? "api-staging" : "api"}.clinicos.ai/clinics/v1/side-by-side/${clinicUUID}/template/${template.name}?is_public=${template.isPublic}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error deleting template: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Template "${template.name}" deleted successfully:`, data);
  } catch (error) {
    console.error(`Error deleting template "${template.name}":`, error);
    throw error;
  }
}

// Main function
(async () => {
  try {
    // Step 1: Login and get accessToken and userId
    const { accessToken, userId } = await loginWithEmailAndPassword(
      email,
      password,
    );
    console.log("Access Token:", accessToken);

    // Step 2: Get clinicUUID
    const clinicUUID = await getClinicUUID(accessToken, userId);
    console.log("Clinic UUID:", clinicUUID);

    // Step 3: Iterate through the templates and delete each one
    for (const template of templatesToDelete) {
      try {
        await deleteTemplate(accessToken, clinicUUID, template);
      } catch (error) {}
    }
  } catch (err) {
    console.error("Error during API calls:", err);
  }
})();
