const templatesToAdd = [
  {
    name: "default_template_9",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500 * 2,
        backgroundColor: "#EDE6E1",
      },
      beforeImage: {
        position: { x: 50 * 2, y: 140 * 2 },
        size: { width: "38%", height: "59%" },
        containerStyle: {
          borderLeftWidth: 0 * 2,
          borderRightWidth: 0 * 2,
          borderBottomWidth: 0 * 2,
          borderTopWidth: 48 * 2,
          borderColor: "#fff",
          borderStyle: "solid",
          borderRadius: 7 * 2,
          overflow: "hidden",
        },
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
        },
      },
      afterImage: {
        position: { x: 255 * 2, y: 170 * 2 },
        size: { width: "38%", height: "59%" },
        containerStyle: {
          borderLeftWidth: 0 * 2,
          borderRightWidth: 0 * 2,
          borderTopWidth: 0 * 2,
          borderBottomWidth: 48 * 2,
          borderColor: "#fff",
          borderStyle: "solid",
          borderRadius: 7 * 2,
          overflow: "hidden",
        },
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_9999.png",
          position: { x: 415 * 2, y: 18 * 2 },
          size: { width: "14%", height: "14%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/x-0001.icon.png",
          position: { x: 30 * 2, y: 410 * 2 },
          size: { width: "10%", height: "10%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/arrow-left-0001.icon.png",
          position: { x: 225 * 2, y: 265 * 2 },
          size: { width: "10%", height: "10%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/heart-0001.icon.png",
          position: { x: 420 * 2, y: 145 * 2 },
          size: { width: "10%", height: "10%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Procedure Title",
          position: { x: 250 * 2, y: 45 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 26 * 2,
            color: "#000",
            fontFamily: "WorkSansRegular",
            zIndex: 2,
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 250 * 2, y: 83 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: 283 * 2,
            fontSize: 10 * 2,
            color: "#000",
            fontFamily: "WorkSansRegular",
            zIndex: 2,
          },
        },
        {
          content: "Before",
          position: { x: 85 * 2, y: 150 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(50%)",
            fontSize: 18 * 2,
            color: "#000",
            fontFamily: "WorkSansRegular",
            zIndex: 2,
          },
        },
        {
          content: "After",
          position: { x: 310 * 2, y: 430 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(50%)",
            fontSize: 18 * 2,
            color: "#000",
            fontFamily: "WorkSansRegular",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },
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

import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const isDev = process.env.ISDEV?.toLowerCase() === "true" ?? true;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Initialize the Supabase client
async function loginWithEmailAndPassword(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return { accessToken: data.session.access_token, userId: data.user.id };
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
}

async function getClinicUUID(accessToken, userId) {
  let url = `https://${isDev ? "api-staging" : "api"}.clinicos.ai/clinics/v1/user/${userId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok)
      throw new Error(`Error fetching data: ${response.statusText}`);
    const data = await response.json();
    return data.user_info[0].clinic_id;
  } catch (error) {
    console.error("Error calling Clinicos API:", error);
    throw error;
  }
}

async function createTemplate(accessToken, clinicUUID, template) {
  const url = `https://${isDev ? "api-staging" : "api"}.clinicos.ai/clinics/v1/side-by-side/${clinicUUID}/template`;

  const payload = {
    template: template.template,
    is_public: template.isPublic,
    display_name: template.name,
    processing_type: "PROGRESS_PHOTO",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok)
      throw new Error(`Error creating template: ${response.statusText}`);
    console.log("Template created successfully:", await response.json());
  } catch (error) {
    console.error("Error creating template:", error);
    throw error;
  }
}

(async () => {
  try {
    const { accessToken, userId } = await loginWithEmailAndPassword(
      email,
      password,
    );
    const clinicUUID = await getClinicUUID(accessToken, userId);
    for (const template of templatesToAdd) {
      try {
        await createTemplate(accessToken, clinicUUID, template);
      } catch (error) {}
    }
  } catch (err) {
    console.error("Error during API calls:", err);
  }
})();
