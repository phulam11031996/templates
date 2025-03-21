const templatesToAdd = [
  {
    name: "default_template_1",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 1000,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 20 * 2, y: 20 * 2 },
        size: { width: "44%", height: "92%" },
        containerStyle: { backgroundColor: "#000" },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      afterImage: {
        position: { x: 260 * 2, y: 20 * 2 },
        size: { width: "44%", height: "92%" },
        containerStyle: { backgroundColor: "#000" },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      images: [],
      texts: [],
      divs: [],
    },
  },

  {
    name: "default_template_2",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500 * 2,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 20 * 2, y: 20 * 2 },
        size: { width: "44%", height: "92%" },
        containerStyle: {
          backgroundColor: "#000",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
        },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      afterImage: {
        position: { x: 260 * 2, y: 20 * 2 },
        size: { width: "44%", height: "92%" },
        containerStyle: {
          backgroundColor: "#000",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
        },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      images: [],
      texts: [],
      divs: [],
    },
  },

  {
    name: "default_template_3",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500 * 2,
        backgroundColor: "#000",
      },
      beforeImage: {
        position: { x: 20 * 2, y: 20 * 2 },
        size: { width: "44%", height: "92%" },
        containerStyle: {
          backgroundColor: "#000",
        },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      afterImage: {
        position: { x: 260 * 2, y: 20 * 2 },
        size: { width: "44%", height: "92%" },
        containerStyle: {
          backgroundColor: "#000",
        },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      images: [],
      texts: [],
      divs: [],
    },
  },

  {
    name: "default_template_4",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500 * 2,
        backgroundColor: "#000",
        overflow: "hidden",
      },
      beforeImage: {
        position: { x: 0 * 2, y: 0 * 2 },
        size: { width: "50%", height: "100%" },
        containerStyle: {
          backgroundColor: "#000",
        },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      afterImage: {
        position: { x: 250 * 2, y: 0 * 2 },
        size: { width: "50%", height: "100%" },
        containerStyle: {
          backgroundColor: "#000",
        },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      images: [],
      texts: [
        {
          content: `${new Array(1000).fill("0").join("")}`,
          position: { x: 0, y: 478 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            textWrap: "nowrap",
            fontSize: 20 * 2,
            color: "transparent",
            fontFamily: "Arial",
          },
        },
        {
          content: "Before",
          position: { x: 125 * 2, y: 478 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translate(-50%)",
            textWrap: "nowrap",
            fontSize: 20 * 2,
            fontFamily: "Arial",
            color: "#fff",
            zIndex: 1,
          },
        },
        {
          content: "After",
          position: { x: 375 * 2, y: 478 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translate(-50%)",
            textWrap: "nowrap",
            fontSize: 20 * 2,
            fontFamily: "Arial",
            color: "#fff",
            zIndex: 1,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_5",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 10, y: 70 },
        size: { width: "47%", height: "70%" },
        containerStyle: { backgroundColor: "#000" },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      afterImage: {
        position: { x: 255, y: 70 },
        size: { width: "47%", height: "70%" },
        containerStyle: { backgroundColor: "#000" },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      images: [],
      texts: [],
      divs: [],
    },
  },

  {
    name: "default_template_6",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500 * 2,
        backgroundColor: "#475772",
      },
      beforeImage: {
        position: { x: 22 * 2, y: 102 * 2 },
        size: { width: "43.5%", height: "60%" },
        containerStyle: {
          borderBottomWidth: 48 * 2,
          borderBottomColor: "#fff",
          borderBottomStyle: "solid",
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
        position: { x: 262 * 2, y: 102 * 2 },
        size: { width: "43.5%", height: "60%" },
        containerStyle: {
          borderBottomWidth: 48 * 2,
          borderBottomColor: "#fff",
          borderBottomStyle: "solid",
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
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_SQUARE_0001.png",
          position: { x: 22 * 2, y: 415 * 2 },
          size: { width: "15%", height: "15%" },
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
          content: "Before",
          position: { x: 135 * 2, y: 365 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 20 * 2,
            color: "#475772",
            fontFamily: "InterRegular",
            zIndex: 2,
          },
        },
        {
          content: "After",
          position: { x: 375 * 2, y: 365 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 20 * 2,
            color: "#475772",
            fontFamily: "InterRegular",
            zIndex: 2,
          },
        },
        {
          content: "PROCEDURE TITLE",
          position: { x: 250 * 2, y: 40 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 31 * 2,
            color: "#fff",
            fontFamily: "SplineSansRegular",
            zIndex: 2,
          },
        },
        {
          content: "Contact Info Etc",
          position: { x: 400 * 2, y: 440 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 22,
            color: "#fff",
            fontFamily: "InterRegular",
            zIndex: 2,
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 240 * 2, y: 440 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            width: 250 * 2,
            fontSize: 11 * 2,
            color: "#fff",
            fontFamily: "InterRegular",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_7",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500 * 2,
        backgroundColor: "#413D3D",
      },
      beforeImage: {
        position: { x: 22 * 2, y: 155 * 2 },
        size: { width: "44%", height: "57%" },
        containerStyle: { backgroundColor: "#000" },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      afterImage: {
        position: { x: 255 * 2, y: 185 * 2 },
        size: { width: "44%", height: "57%" },
        containerStyle: { backgroundColor: "#000" },
        imageStyle: { width: "100%", height: "100%", objectFit: "cover" },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_SQUARE_0001.png",
          position: { x: 395 * 2, y: 45 * 2 },
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
      ],
      texts: [
        {
          content: "Procedure Title",
          position: { x: 22 * 2, y: 45 * 2 },
          containerStyle: {},
          textStyle: {
            textWrap: "nowrap",
            fontSize: 42 * 2,
            color: "#fff",
            fontFamily: "InstrumentSerifRegular",
            zIndex: 2,
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 22 * 2, y: 100 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            width: 250 * 2,
            fontSize: 11 * 2,
            color: "#fff",
            fontFamily: "InterRegular",
            zIndex: 2,
          },
        },
        {
          content: "Before",
          position: { x: 133 * 2, y: 420 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 22 * 2,
            backgroundColor: "#fff",
            paddingTop: 3 * 2,
            paddingBottom: 3 * 2,
            width: 170 * 2,
            textAlign: "center",
            color: "#413D3D",
            fontFamily: "InstrumentSerifRegular",
            zIndex: 2,
          },
        },
        {
          content: "After",
          position: { x: 366 * 2, y: 168 * 2 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 22 * 2,
            backgroundColor: "#fff",
            paddingTop: 3 * 2,
            paddingBottom: 3 * 2,
            width: 170 * 2,
            textAlign: "center",
            color: "#413D3D",
            fontFamily: "InstrumentSerifRegular",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_8",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F8E7E3",
      },
      beforeImage: {
        position: { x: 30, y: 130 },
        size: { width: "42%", height: "57%" },
        containerStyle: {
          rotate: "-6deg",
          borderTopWidth: 8,
          borderLeftWidth: 8,
          borderBottomWidth: 48,
          borderRightWidth: 8,
          borderColor: "#fff",
          borderStyle: "solid",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        },
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
        },
      },
      afterImage: {
        position: { x: 220, y: 105 },
        size: { width: "42%", height: "57%" },
        containerStyle: {
          rotate: "9deg",
          borderTopWidth: 8,
          borderLeftWidth: 8,
          borderBottomWidth: 48,
          borderRightWidth: 8,
          borderColor: "#fff",
          borderStyle: "solid",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
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
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_SQUARE_0001.png",
          position: { x: 408, y: 32 },
          size: { width: "12%", height: "12%" },
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
          content: "PROCEDURE TITLE",
          position: { x: 30, y: 40 },
          containerStyle: {},
          textStyle: {
            textWrap: "nowrap",
            fontSize: 27,
            color: "#000",
            zIndex: 2,
            fontFamily: "WorkSansMedium",
          },
        },
        {
          content: "Short procedure description or necessary information.",
          position: { x: 30, y: 80 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            width: 180,
            fontSize: 11,
            color: "#000",
            fontFamily: "InterRegular",
            zIndex: 2,
          },
        },
        {
          content: "BEFORE",
          position: { x: 95, y: 452 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(50%)",
            fontSize: 18,
            color: "#000",
            fontFamily: "WorkSansRegular",
            zIndex: 2,
          },
        },
        {
          content: "AFTER",
          position: { x: 275, y: 452 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(50%)",
            fontSize: 18,
            color: "#000",
            fontFamily: "WorkSansRegular",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },

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
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_SQUARE_0001.png",
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

  {
    name: "default_template_10",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "rgba(25, 14, 4, 0.22)",
      },
      beforeImage: {
        position: { x: 20, y: 25 },
        size: { width: "44%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          paddingTop: 35,
          backgroundColor: "#fff",
          borderStyle: "solid",
          borderColor: "#3D2206",
          borderWidth: 2,
        },
      },
      afterImage: {
        position: { x: 260, y: 25 },
        size: { width: "44%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          paddingTop: 35,
          backgroundColor: "#fff",
          borderStyle: "solid",
          borderColor: "#3D2206",
          borderWidth: 2,
        },
      },
      images: [
        {
          src: "TEMPLATE_LOGO",
          position: { x: 329, y: 423 },
          size: { width: "8%", height: "8%" },
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
          content: "Before",
          position: { x: 130, y: 32 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 21,
            fontFamily: "Arial",
          },
        },
        {
          content: "After",
          position: { x: 370, y: 32 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 21,
            fontFamily: "Arial",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 41, y: 430 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            textWrap: "nowrap",
            fontSize: 26,
            fontFamily: "Arial",
            fontWeight: "lighter",
          },
        },
      ],
      divs: [
        {
          position: "absolute",
          top: 408,
          left: 20,
          width: "91%",
          height: "14%",
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "#3D2206",
          borderStyle: "solid",
        },
      ],
    },
  },

  {
    name: "default_template_11",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F0EAE4",
      },
      beforeImage: {
        position: { x: 20, y: 25 },
        size: { width: "44%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          paddingTop: 35,
          backgroundColor: "#FBF8EF",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 2,
        },
      },
      afterImage: {
        position: { x: 260, y: 25 },
        size: { width: "44%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          paddingTop: 35,
          backgroundColor: "#FBF8EF",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 2,
        },
      },
      images: [],
      texts: [
        {
          content: "Before",
          position: { x: 130, y: 32 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 21,
            fontFamily: "Arial",
          },
        },
        {
          content: "After",
          position: { x: 370, y: 32 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 21,
            fontFamily: "Arial",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 41, y: 430 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            textWrap: "nowrap",
            fontSize: 26,
            fontFamily: "Arial",
            fontWeight: "lighter",
          },
        },
      ],
      divs: [
        {
          position: "absolute",
          top: 408,
          left: 20,
          width: "91%",
          height: "14%",
          backgroundColor: "#FBF8EF",
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
        },
      ],
    },
  },

  {
    name: "default_template_12",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#D9929A",
      },
      beforeImage: {
        position: { x: 36, y: 120 },
        size: { width: "40%", height: "56%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#E9C2C2",
          borderRadius: 10,
          paddingTop: 40,
          borderWidth: 2,
          borderColor: "#fff",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      afterImage: {
        position: { x: 270, y: 120 },
        size: { width: "40%", height: "56%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#E9C2C2",
          borderRadius: 10,
          paddingTop: 40,
          borderWidth: 2,
          borderColor: "#fff",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      images: [
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTQ1IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNDQuMDYxIDEzLjA2MDdDMTQ0LjY0NiAxMi40NzQ5IDE0NC42NDYgMTEuNTI1MSAxNDQuMDYxIDEwLjkzOTNMMTM0LjUxNSAxLjM5MzRDMTMzLjkyOSAwLjgwNzYxIDEzMi45NzkgMC44MDc2MSAxMzIuMzkzIDEuMzkzNEMxMzEuODA4IDEuOTc5MTkgMTMxLjgwOCAyLjkyODkzIDEzMi4zOTMgMy41MTQ3MkwxNDAuODc5IDEyTDEzMi4zOTMgMjAuNDg1M0MxMzEuODA4IDIxLjA3MTEgMTMxLjgwOCAyMi4wMjA4IDEzMi4zOTMgMjIuNjA2NkMxMzIuOTc5IDIzLjE5MjQgMTMzLjkyOSAyMy4xOTI0IDEzNC41MTUgMjIuNjA2NkwxNDQuMDYxIDEzLjA2MDdaTTAgMTMuNUgxNDNWMTAuNUgwVjEzLjVaIiBmaWxsPSIjRDk5MjlBIi8+Cjwvc3ZnPgo=",
          position: { x: 205, y: 260 },
          size: { width: "14%", height: "7.5%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
            backgroundColor: "#fff",
            borderRadius: 12,
            paddingRight: 10,
            paddingLeft: 10,
          },
        },
      ],
      texts: [
        {
          content: "before",
          position: { x: 135, y: 130 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 20,
            fontFamily: "Times New Roman",
            color: "#fff",
          },
        },
        {
          content: "after",
          position: { x: 375, y: 130 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 20,
            fontFamily: "Times New Roman",
            color: "#fff",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 250, y: 40 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 45,
            color: "#fff",
            fontFamily: "Times New Roman",
            zIndex: 2,
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 240, y: 430 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            width: 250,
            fontSize: 11,
            color: "#fff",
            fontFamily: "Times New Roman",
            textAlign: "center",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_13",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#B3C1C1",
      },
      beforeImage: {
        position: { x: 36, y: 120 },
        size: { width: "40%", height: "56%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#608686",
          borderRadius: 10,
          paddingTop: 40,
          borderWidth: 2,
          borderColor: "#fff",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      afterImage: {
        position: { x: 270, y: 120 },
        size: { width: "40%", height: "56%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#608686",
          borderRadius: 10,
          paddingTop: 40,
          borderWidth: 2,
          borderColor: "#fff",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0012.png",
        //   position: { x: 380, y: 465 },
        //   size: { width: "23%", height: "5%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTQ1IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNDQuMDYxIDEzLjA2MDdDMTQ0LjY0NiAxMi40NzQ5IDE0NC42NDYgMTEuNTI1MSAxNDQuMDYxIDEwLjkzOTNMMTM0LjUxNSAxLjM5MzRDMTMzLjkyOSAwLjgwNzYxIDEzMi45NzkgMC44MDc2MSAxMzIuMzkzIDEuMzkzNEMxMzEuODA4IDEuOTc5MTkgMTMxLjgwOCAyLjkyODkzIDEzMi4zOTMgMy41MTQ3MkwxNDAuODc5IDEyTDEzMi4zOTMgMjAuNDg1M0MxMzEuODA4IDIxLjA3MTEgMTMxLjgwOCAyMi4wMjA4IDEzMi4zOTMgMjIuNjA2NkMxMzIuOTc5IDIzLjE5MjQgMTMzLjkyOSAyMy4xOTI0IDEzNC41MTUgMjIuNjA2NkwxNDQuMDYxIDEzLjA2MDdaTTAgMTMuNUgxNDNWMTAuNUgwVjEzLjVaIiBmaWxsPSIjNjA4Njg2Ii8+Cjwvc3ZnPgo=",
          position: { x: 205, y: 260 },
          size: { width: "14%", height: "7.5%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
            backgroundColor: "#fff",
            borderRadius: 12,
            paddingRight: 10,
            paddingLeft: 10,
          },
        },
      ],
      texts: [
        {
          content: "before",
          position: { x: 135, y: 130 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 20,
            fontFamily: "Times New Roman",
            color: "#fff",
          },
        },
        {
          content: "after",
          position: { x: 375, y: 130 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 20,
            fontFamily: "Times New Roman",
            color: "#fff",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 250, y: 40 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 45,
            color: "#fff",
            fontFamily: "Times New Roman",
            zIndex: 2,
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 240, y: 430 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            width: 250,
            fontSize: 11,
            color: "#fff",
            fontFamily: "Times New Roman",
            textAlign: "center",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_14",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#E2CCCE",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#fff",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      afterImage: {
        position: { x: 250, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#fff",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0011.png",
        //   position: { x: 6, y: 6 },
        //   size: { width: "25%", height: "5%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
      ],
      texts: [
        {
          content: "before",
          position: { x: 125, y: 334 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 18,
            fontFamily: "Arial",
            width: 135,
            borderRadius: 5,
            textAlign: "center",
            padding: 9,
            backgroundColor: "#DC9AA1",
            borderStyle: "solid",
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
        {
          content: "after",
          position: { x: 375, y: 334 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 18,
            fontFamily: "Arial",
            width: 135,
            borderRadius: 5,
            textAlign: "center",
            padding: 9,
            backgroundColor: "#DC9AA1",
            borderStyle: "solid",
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
        {
          content: "Procedure Title",
          position: { x: 250, y: 396 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 40,
            fontFamily: "Arial",
            fontWeight: "lighter",
            color: "#fff",
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines.",
          position: { x: 250, y: 445 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            width: 250,
            fontSize: 10,
            fontFamily: "Arial",
            textAlign: "center",
            color: "#fff",
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_15",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#658588",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#fff",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      afterImage: {
        position: { x: 250, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#fff",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0011.png",
        //   position: { x: 6, y: 6 },
        //   size: { width: "25%", height: "5%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
      ],
      texts: [
        {
          content: "before",
          position: { x: 125, y: 334 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 18,
            fontFamily: "Arial",
            width: 135,
            borderRadius: 5,
            textAlign: "center",
            padding: 9,
            backgroundColor: "#9AAAAA",
            borderStyle: "solid",
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
        {
          content: "after",
          position: { x: 375, y: 334 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 18,
            fontFamily: "Arial",
            width: 135,
            borderRadius: 5,
            textAlign: "center",
            padding: 9,
            backgroundColor: "#9AAAAA",
            borderStyle: "solid",
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
        {
          content: "Procedure Title",
          position: { x: 250, y: 396 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 40,
            fontFamily: "Arial",
            fontWeight: "lighter",
            color: "#fff",
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines.",
          position: { x: 250, y: 445 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            width: 250,
            fontSize: 10,
            fontFamily: "Arial",
            textAlign: "center",
            color: "#fff",
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_16",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      afterImage: {
        position: { x: 250, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0010.png",
        //   position: { x: 11, y: 390 },
        //   size: { width: "26%", height: "6%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
      ],
      texts: [
        {
          content: "before",
          position: { x: 126, y: 30 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            width: 105,
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1.5,
            borderRadius: 20,
            textAlign: "center",
            padding: 5,
            backgroundColor: "#fff",
          },
        },
        {
          content: "after",
          position: { x: 374, y: 30 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            width: 105,
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1.5,
            borderRadius: 20,
            textAlign: "center",
            padding: 5,
            backgroundColor: "#fff",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 472, y: 384 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-100%)",
            textWrap: "nowrap",
            fontSize: 40,
            fontFamily: "Arial",
            fontWeight: "lighter",
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines.",
          position: { x: 472, y: 443 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-100%)",
            width: 250,
            fontSize: 11,
            color: "#000",
            fontFamily: "Arial",
            textAlign: "right",
          },
        },
      ],
      divs: [
        {
          position: "absolute",
          top: 44,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          right: 0,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 430,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 314,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 182,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 66,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 45,
          width: "100%",
          height: 1.5,
          backgroundColor: "#000",
        },
      ],
    },
  },

  {
    name: "default_template_17",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F1E8DD",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      afterImage: {
        position: { x: 250, y: 0 },
        size: { width: "50%", height: "71%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxSizing: "border-box",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 1,
          borderBottomWidth: 2,
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0010.png",
        //   position: { x: 11, y: 390 },
        //   size: { width: "26%", height: "6%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
      ],
      texts: [
        {
          content: "before",
          position: { x: 126, y: 30 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            width: 105,
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1.5,
            borderRadius: 20,
            textAlign: "center",
            padding: 5,
            backgroundColor: "#F1E8DD",
          },
        },
        {
          content: "after",
          position: { x: 374, y: 30 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            width: 105,
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1.5,
            borderRadius: 20,
            textAlign: "center",
            padding: 5,
            backgroundColor: "#F1E8DD",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 472, y: 384 },
          containerStyle: {
            zIndex: 1,
          },
          textStyle: {
            position: "absolute",
            transform: "translateX(-100%)",
            textWrap: "nowrap",
            fontSize: 40,
            fontFamily: "Arial",
            fontWeight: "lighter",
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines.",
          position: { x: 472, y: 443 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-100%)",
            width: 250,
            fontSize: 11,
            color: "#000",
            fontFamily: "Arial",
            textAlign: "right",
          },
        },
      ],
      divs: [
        {
          position: "absolute",
          top: 44,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          right: 0,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 430,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 314,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 182,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 44,
          left: 66,
          width: 4,
          height: 4,
          borderRadius: 100,
          backgroundColor: "#000",
          zIndex: 1,
        },
        {
          position: "absolute",
          top: 45,
          width: "100%",
          height: 1.5,
          backgroundColor: "#000",
        },
      ],
    },
  },

  {
    name: "default_template_18",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F7F5F0",
      },
      beforeImage: {
        position: { x: 32, y: 37 },
        size: { width: "43.5%", height: "62%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      afterImage: {
        position: { x: 248, y: 95 },
        size: { width: "43.5%", height: "62%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0013.png",
        //   position: { x: 400, y: 15 },
        //   size: { width: "17%", height: "7%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0NiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMiAxMC41QzEuMTcxNTcgMTAuNSAwLjUgMTEuMTcxNiAwLjUgMTJDMC41IDEyLjgyODQgMS4xNzE1NyAxMy41IDIgMTMuNVYxMC41Wk00NS4wNjA3IDEzLjA2MDdDNDUuNjQ2NCAxMi40NzQ5IDQ1LjY0NjQgMTEuNTI1MSA0NS4wNjA3IDEwLjkzOTNMMzUuNTE0NyAxLjM5MzRDMzQuOTI4OSAwLjgwNzYxNCAzMy45NzkyIDAuODA3NjE0IDMzLjM5MzQgMS4zOTM0QzMyLjgwNzYgMS45NzkxOSAzMi44MDc2IDIuOTI4OTcgMzMuMzkzNCAzLjUxNDc1TDQxLjg3ODcgMTJMMzMuMzkzNCAyMC40ODUzQzMyLjgwNzYgMjEuMDcxIDMyLjgwNzYgMjIuMDIwOCAzMy4zOTM0IDIyLjYwNjZDMzMuOTc5MiAyMy4xOTI0IDM0LjkyODkgMjMuMTkyNCAzNS41MTQ3IDIyLjYwNjZMNDUuMDYwNyAxMy4wNjA3Wk0yIDEzLjVINDRWMTAuNUgyVjEzLjVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",
          position: { x: 225, y: 200 },
          size: { width: "10%", height: "10%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
            backgroundColor: "#F3E2BE",
            borderWidth: 2,
            padding: 10,
            borderRadius: 100,
            borderStyle: "solid",
            borderColor: "#000",
            boxSizing: "border-box",
          },
        },
      ],
      texts: [
        {
          content: "before",
          position: { x: 78, y: 62 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            padding: 4,
            borderWidth: 2,
            borderColor: "#000",
            borderStyle: "solid",
            borderRadius: 20,
            backgroundColor: "#F3E2BE",
            width: 110,
            textAlign: "center",
            color: "#000",
          },
        },
        {
          content: "after",
          position: { x: 433, y: 357 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            padding: 4,
            borderWidth: 2,
            borderColor: "#000",
            borderStyle: "solid",
            borderRadius: 20,
            backgroundColor: "#F3E2BE",
            width: 110,
            textAlign: "center",
            color: "#000",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 32, y: 385 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            fontSize: 41,
            color: "#000",
            fontFamily: "Arial",
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 460, y: 450 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-100%)",
            width: 250,
            fontSize: 11,
            color: "#000",
            fontFamily: "Arial",
            textAlign: "right",
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_19",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#E3F3F3",
      },
      beforeImage: {
        position: { x: 32, y: 37 },
        size: { width: "43.5%", height: "62%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      afterImage: {
        position: { x: 248, y: 95 },
        size: { width: "43.5%", height: "62%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0016.png",
        //   position: { x: 364, y: 15 },
        //   size: { width: "23%", height: "10%" },
        //   containerStyle: {
        //     zIndex: 1,
        //   },
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0NiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMiAxMC41QzEuMTcxNTcgMTAuNSAwLjUgMTEuMTcxNiAwLjUgMTJDMC41IDEyLjgyODQgMS4xNzE1NyAxMy41IDIgMTMuNVYxMC41Wk00NS4wNjA3IDEzLjA2MDdDNDUuNjQ2NCAxMi40NzQ5IDQ1LjY0NjQgMTEuNTI1MSA0NS4wNjA3IDEwLjkzOTNMMzUuNTE0NyAxLjM5MzRDMzQuOTI4OSAwLjgwNzYxNCAzMy45NzkyIDAuODA3NjE0IDMzLjM5MzQgMS4zOTM0QzMyLjgwNzYgMS45NzkxOSAzMi44MDc2IDIuOTI4OTcgMzMuMzkzNCAzLjUxNDc1TDQxLjg3ODcgMTJMMzMuMzkzNCAyMC40ODUzQzMyLjgwNzYgMjEuMDcxIDMyLjgwNzYgMjIuMDIwOCAzMy4zOTM0IDIyLjYwNjZDMzMuOTc5MiAyMy4xOTI0IDM0LjkyODkgMjMuMTkyNCAzNS41MTQ3IDIyLjYwNjZMNDUuMDYwNyAxMy4wNjA3Wk0yIDEzLjVINDRWMTAuNUgyVjEzLjVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K",
          position: { x: 225, y: 200 },
          size: { width: "10%", height: "10%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
            backgroundColor: "#BEE6F3",
            borderWidth: 2,
            padding: 10,
            borderRadius: 100,
            borderStyle: "solid",
            borderColor: "#000",
            boxSizing: "border-box",
          },
        },
      ],
      texts: [
        {
          content: "before",
          position: { x: 78, y: 62 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            zIndex: 2,
            padding: 4,
            borderWidth: 2,
            borderColor: "#000",
            borderStyle: "solid",
            borderRadius: 20,
            backgroundColor: "#BEE6F3",
            width: 110,
            textAlign: "center",
            color: "#000",
          },
        },
        {
          content: "after",
          position: { x: 433, y: 357 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontSize: 16,
            fontFamily: "Arial",
            zIndex: 2,
            padding: 4,
            borderWidth: 2,
            borderColor: "#000",
            borderStyle: "solid",
            borderRadius: 20,
            backgroundColor: "#BEE6F3",
            width: 110,
            textAlign: "center",
            color: "#000",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 32, y: 385 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            fontSize: 41,
            color: "#000",
            fontFamily: "Arial",
            zIndex: 2,
          },
        },
        {
          content:
            "Short procedure description or necessary information. Keep info to two lines maximum.",
          position: { x: 460, y: 450 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-100%)",
            width: 250,
            fontSize: 11,
            color: "#000",
            fontFamily: "Arial",
            textAlign: "right",
            zIndex: 2,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_20",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        minWidth: 450,
        backgroundColor: "#F8E7E3",
      },
      beforeImage: {
        position: { x: 30, y: 70 },
        size: { width: "47%", height: "57%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
          rotate: "-1.6deg",
        },
      },
      afterImage: {
        position: { x: 235, y: 121 },
        size: { width: "47%", height: "57%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
          rotate: "3.9deg",
        },
      },
      images: [
        // {
        //   src: "https://clinic-os.com/user-app-assets/template-logos/template-logo-0022.png",
        //   position: { x: 25, y: 418 },
        //   size: { width: "18%", height: "9%" },
        //   containerStyle: {},
        //   imageStyle: {
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "fill",
        //   },
        // },
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMyAzTDMwIDMwIiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTTMwIDNMMyAzMCIgc3Ryb2tlPSIjOTk5OTk5IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4KCg==",
          position: { x: 40, y: 86 },
          size: { width: "9%", height: "9%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            padding: 13,
            borderRadius: 100,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            boxSizing: "border-box",
            backgroundColor: "#fff",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/heart-0001.icon.png",
          position: { x: 420, y: 144 },
          size: { width: "9%", height: "9%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            borderRadius: 100,
            rotate: "7deg",
            width: "100%",
            height: "100%",
            objectFit: "fill",
            boxSizing: "border-box",
            backgroundColor: "#fff",
          },
        },
      ],
      texts: [
        {
          content: "Before",
          position: { x: 150, y: 30 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            color: "#000",
          },
        },
        {
          content: "After",
          position: { x: 370, y: 80 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            color: "#000",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 165, y: 425 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            fontSize: 44,
            fontFamily: "Arial",
            textWrap: "nowrap",
            color: "#000",
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_21",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        minWidth: 450,
        backgroundColor: "#D2E2E7",
      },
      beforeImage: {
        position: { x: 30, y: 70 },
        size: { width: "47%", height: "57%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
          rotate: "-1.6deg",
        },
      },
      afterImage: {
        position: { x: 235, y: 121 },
        size: { width: "47%", height: "57%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
          boxSizing: "border-box",
          rotate: "3.9deg",
        },
      },
      images: [
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMyAzTDMwIDMwIiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTTMwIDNMMyAzMCIgc3Ryb2tlPSIjOTk5OTk5IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4KCg==",
          position: { x: 40, y: 86 },
          size: { width: "9%", height: "9%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            padding: 13,
            borderRadius: 100,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            boxSizing: "border-box",
            backgroundColor: "#fff",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/heart-0001.icon.png",
          position: { x: 420, y: 144 },
          size: { width: "9%", height: "9%" },
          containerStyle: {
            zIndex: 1,
          },
          imageStyle: {
            borderRadius: 100,
            rotate: "7deg",
            width: "100%",
            height: "100%",
            objectFit: "fill",
            boxSizing: "border-box",
            backgroundColor: "#fff",
          },
        },
      ],
      texts: [
        {
          content: "Before",
          position: { x: 150, y: 30 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            color: "#000",
          },
        },
        {
          content: "After",
          position: { x: 370, y: 80 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            color: "#000",
          },
        },
        {
          content: "Procedure Title",
          position: { x: 165, y: 425 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            fontSize: 44,
            fontFamily: "Arial",
            textWrap: "nowrap",
            color: "#000",
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_22",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "49.5%", height: "100%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      afterImage: {
        position: { x: 255, y: 0 },
        size: { width: "49.5%", height: "100%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      images: [],
      texts: [
        {
          content: "Before",
          position: { x: 125, y: 30 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#F1E8DD",
            borderRadius: 20,
          },
        },
        {
          content: "After",
          position: { x: 375, y: 440 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#F1E8DD",
            borderRadius: 20,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_23",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "49.5%", height: "100%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      afterImage: {
        position: { x: 255, y: 0 },
        size: { width: "49.5%", height: "100%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_SQUARE_0001.png",
          position: { x: 200, y: 200 },
          size: { width: 100, height: 100 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Before",
          position: { x: 125, y: 30 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#F1E8DD",
            borderRadius: 20,
          },
        },
        {
          content: "After",
          position: { x: 375, y: 440 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 25,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#F1E8DD",
            borderRadius: 20,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_24",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#fff",
      },
      beforeImage: {
        position: { x: 125, y: 0 },
        size: { width: "50%", height: "50%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      afterImage: {
        position: { x: 125, y: 250 },
        size: { width: "50%", height: "50%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_0001.png",
          position: { x: 220, y: 235 },
          size: { width: 320 / 5, height: 180 / 5 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Before",
          position: { x: 250, y: 20 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 15,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 3,
            paddingBottom: 3,
            backgroundColor: "#F1E8DD",
            borderRadius: 20,
          },
        },
        {
          content: "After",
          position: { x: 250, y: 455 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 15,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 3,
            paddingBottom: 3,
            backgroundColor: "#F1E8DD",
            borderRadius: 20,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_25",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F1E8DD",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "55%", height: "55%" },
        containerStyle: {},
        imageStyle: {
          borderRadius: 1000,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      afterImage: {
        position: { x: 225, y: 225 },
        size: { width: "55%", height: "55%" },
        containerStyle: {},
        imageStyle: {
          borderRadius: 1000,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_0001.png",
          position: { x: 50, y: 425 },
          size: { width: 320 / 4, height: 180 / 4 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Face Lift",
          position: { x: 390, y: 90 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 30,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_26",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#D9929A",
      },
      beforeImage: {
        position: { x: 0, y: 0 },
        size: { width: "50%", height: "73%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      afterImage: {
        position: { x: 250, y: 0 },
        size: { width: "50%", height: "73%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_0001.png",
          position: { x: 330, y: 420 },
          size: { width: 320 / 4, height: 180 / 4 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Face Lift",
          position: { x: 30, y: 390 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 30,
          },
        },
        {
          content: "145 lbs",
          position: { x: 30, y: 430 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 10,
          },
        },
        {
          content: "39 years old",
          position: { x: 30, y: 445 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 10,
          },
        },
        {
          content: "BMI 36",
          position: { x: 30, y: 460 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            textWrap: "nowrap",
            fontFamily: "Arial",
            fontSize: 10,
          },
        },
      ],
      divs: [
        {
          position: "absolute",
          top: 0,
          left: 250,
          width: "0.5%",
          height: "100%",
          backgroundColor: "#E9C1C1",
        },
      ],
    },
  },

  {
    name: "default_template_27",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F1E8DD",
      },
      beforeImage: {
        position: { x: 140, y: 62 },
        size: { width: "44%", height: "31%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#000",
          borderStyle: "solid",
        },
      },
      afterImage: {
        position: { x: 140, y: 250 },
        size: { width: "44%", height: "31%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#000",
          borderStyle: "solid",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_0001.png",
          position: { x: 330, y: 470 },
          size: { width: 320 / 8, height: 180 / 8 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Face Lift",
          position: { x: 250, y: 25 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 19,
          },
        },
        {
          content: "Before",
          position: { x: 250, y: 220 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 14,
          },
        },
        {
          content: "After",
          position: { x: 250, y: 410 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 14,
          },
        },
        {
          content:
            "This patient who is the mother of two kids, 39 years old, 174 lbs wanted to rejuvinate her face",
          position: { x: 250, y: 430 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            fontFamily: "Times New Roman",
            textAlign: "center",
            fontSize: 9,
            width: 200,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_28",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#F1E8DD",
      },
      beforeImage: {
        position: { x: 21, y: 111 },
        size: { width: "43%", height: "54%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "100%",
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
        },
      },
      afterImage: {
        position: { x: 261, y: 111 },
        size: { width: "43%", height: "54%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "100%",
          borderWidth: 2,
          borderColor: "#000",
          borderStyle: "solid",
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_0001.png",
          position: { x: 200, y: 430 },
          size: { width: 320 / 3, height: 180 / 3 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Face Lift",
          position: { x: 250, y: 20 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 36,
          },
        },
        {
          content:
            "Deep plane face lift 39 year old mother of 3 childen, 158 lbs",
          position: { x: 250, y: 67 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            fontFamily: "Times New Roman",
            textAlign: "center",
            fontSize: 9,
            width: 200,
          },
        },
      ],
      divs: [],
    },
  },

  {
    name: "default_template_29",
    isPublic: true,
    template: {
      outerContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "#EAE7E3",
      },
      beforeImage: {
        position: { x: 39, y: 113 },
        size: { width: "38%", height: "60%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 30,
        },
      },
      afterImage: {
        position: { x: 275, y: 113 },
        size: { width: "38%", height: "60%" },
        containerStyle: {},
        imageStyle: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 30,
        },
      },
      images: [
        {
          src: "https://clinic-os.com/user-app-assets/template-logo-placeholder/TEMPLATE_LOGO_RECTANGLE_0001.png",
          position: { x: 200, y: 430 },
          size: { width: 320 / 3, height: 180 / 3 },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/before-after-frame-0001.png",
          position: { x: 20, y: 94 },
          size: { width: "45%", height: "67%" },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
        {
          src: "https://clinic-os.com/user-app-assets/template-other-images/before-after-frame-0001.png",
          position: { x: 255, y: 94 },
          size: { width: "45%", height: "67%" },
          containerStyle: {},
          imageStyle: {
            width: "100%",
            height: "100%",
            objectFit: "fill",
          },
        },
      ],
      texts: [
        {
          content: "Face Lift",
          position: { x: 250, y: 20 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            textWrap: "nowrap",
            fontFamily: "Times New Roman",
            fontSize: 36,
          },
        },
        {
          content: "Deep plane face lift",
          position: { x: 250, y: 67 },
          containerStyle: {},
          textStyle: {
            position: "absolute",
            transform: "translateX(-50%)",
            fontFamily: "Times New Roman",
            textAlign: "center",
            fontSize: 9,
            width: 200,
          },
        },
      ],
      divs: [],
    },
  },

  //
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
