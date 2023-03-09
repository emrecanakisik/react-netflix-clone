import { createContext, useState, useContext } from "react";

export const getStartedPageLang = {
  english: {
    link: "/nl-en",
    signInBtn: "Sign In",
    header: {
      H1: "Unlimited movies, TV shows, and more.",
      H2: "Watch anywhere. Cancel anytime.",
      form: {
        Title:
          "Ready to watch? Enter your email to create or restart your membership.",
        inputLabel: "Email address",
        btnTitle: "Get Started",
      },
    },
    main: {
      s1: {
        H1: "Enjoy on your TV.",
        H2: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      },
      s2: {
        H1: "Download your shows to watch offline.",
        H2: "Save your favorites easily and always have something to watch.",
      },
      s3: {
        H1: "Watch everywhere.",
        H2: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      },
      s4: {
        H1: "Create profiles for kids.",
        H2: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          ques: "What can I watch on Netflix?",
          ans: {
            p1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
          },
        },
        {
          ques: "What is Netflix?",
          ans: {
            p1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            p2: "You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
          },
        },
        {
          ques: "How much does Netflix cost?",
          ans: {
            p1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 63.99 TL to 130.99 TL a month. No extra costs, no contracts.",
          },
        },
        {
          ques: "Where can I watch?",
          ans: {
            p1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            p2: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
          },
        },
        {
          ques: "How do I cancel?",
          ans: {
            p1: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.",
          },
        },
        {
          ques: "Is Netflix good for kids?",
          ans: {
            p1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
            p2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
          },
        },
      ],
    },
    footer: {
      phoneNumForQues: { title: "Questions? Call ", number: "0850-390-7444" },
      items: [
        "FAQ",
        "Help Center",
        "Account",
        "Media Center",
        "Investor Relations",
        "Jobs",
        "Redeem Gift Cards",
        "Ways to Watch",
        "Terms of Use",
        "Privacy",
        "Cookie Preferences",
        "Corporate Information",
        "Contact Us",
        "Speed Test",
        "Legal Notices",
        "Only on Netflix",
      ],
    },
  },
  nederlands: {
    link: "/nl",
    signInBtn: "Inloggen",
    header: {
      H1: "Onbeperkt series, films en meer kijken.",
      H2: "Kijk waar je wilt. Altijd opzegbaar.",
      form: {
        Title:
          "Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen.",
        inputLabel: "E-mailadres",
        btnTitle: "Aan de slag",
      },
    },
    main: {
      s1: {
        H1: "Kijk op je tv.",
        H2: "Kijk op smart-tv's, PlayStation, Xbox, Chromecast, Apple TV, blu-rayspelers en meer.",
      },
      s2: {
        H1: "Download series die je offline wilt kijken.",
        H2: "Sla je favorieten eenvoudig op zodat je altijd wat kunt kijken.",
      },
      s3: {
        H1: "Kijk overal.",
        H2: "Stream onbeperkt series en films op je telefoon, tablet, laptop en tv, zonder meer te betalen.",
      },
      s4: {
        H1: "Maak profielen voor kids.",
        H2: "Laat kids op avontuur gaan met hun favoriete personages in een omgeving die speciaal voor hen is gemaakt. Gratis bij je lidmaatschap.",
      },
    },
    faq: {
      title: "Veelgestelde vragen",
      questions: [
        {
          ques: "Wat kan ik kijken op Netflix?",
          ans: {
            p1: "Netflix heeft een uitgebreide catalogus van speelfilms, documentaires, series, anime, bekroonde Netflix Originals en meer. Kijk zoveel je wilt en wanneer je wilt.",
            a: "Bekijk enkele titels.",
          },
        },
        {
          ques: "Wat is Netflix?",
          ans: {
            p1: "Netflix is een streamingservice met een zeer groot aanbod van bekroonde series, films, anime, documentaires en nog veel meer op duizenden apparaten met een internetverbinding.",
            p2: "Je kijkt zo veel je wilt, wanneer je wilt, zonder enige vorm van reclame. En dit allemaal voor één lage prijs per maand. Er valt altijd iets nieuws te ontdekken en elke week worden er nieuwe series en films toegevoegd!",
          },
        },
        {
          ques: "Hoeveel kost Netflix?",
          ans: {
            p1: "Kijk Netflix op je smartphone, tablet, smart-tv, laptop of streamingapparaat. Allemaal voor één lage prijs per maand. Abonnementen vanaf € 7,99 tot € 15,99 per maand. Geen bijkomende kosten of contracten.",
          },
        },
        {
          ques: "Waar kan ik kijken?",
          ans: {
            p1: "Kijk altijd en overal. Log in bij je account op de Netflix-website om direct online te kijken vanaf je computer of op een apparaat met een internetverbinding en de Netflix-app, zoals smart-tv's, smartphones, tablets, mediaspelers en gameconsoles.",
            p2: "Je kunt je favoriete series ook downloaden via de iOS-, Android- of Windows 10-app. Gebruik de downloadfunctie om onderweg en wanneer je geen internetverbinding hebt, te kunnen kijken. Neem Netflix overal mee.",
          },
        },
        {
          ques: "Hoe kan ik opzeggen?",
          ans: {
            p1: "Netflix is flexibel. Er zijn geen omslachtige contracten en geen verplichtingen aan verbonden. Je kunt je account makkelijk online annuleren. Je hoeft hiervoor maar twee keer te klikken. Er zijn geen annuleringskosten. Je kunt je account op elk gewenst moment opstarten of stopzetten.",
          },
        },
        {
          ques: "Is Netflix geschikt voor kids?",
          ans: {
            p1: "Netflix Kids maakt onderdeel uit van je lidmaatschap. Ouders kunnen erop vertrouwen dat hun kids gezinsvriendelijke series en films kijken in hun eigen omgeving.",
            p2: "Kids-profielen bevatten ouderlijk toezicht met een pincode, dus je kunt een leeftijdsclassificatie instellen voor content die kids mogen kijken. Ook kun je specifieke titels blokkeren die kids niet mogen zien.",
          },
        },
      ],
    },
    footer: {
      phoneNumForQues: { title: "Vragen? Bel ", number: "0800 020 1567" },
      items: [
        "Veelgestelde vragen",
        "Helpcentrum",
        "Account",
        "Mediacenter",
        "Relaties met investeerders",
        "Vacatures",
        "Redeem Gift Cards",
        "Hoe kun je Netflix kijken?",
        "Gebruiksvoorwaarden",
        "Privacy",
        "Cookievoorkeuren",
        "Bedrijfsgegevens",
        "Contact opnemen",
        "Snelheidstest",
        "Wettelijke garantie",
        "Alleen op Netflix",
      ],
    },
  },
};

export const GSLangContext = createContext(getStartedPageLang.english);

const GSLangContProv = ({ children, provValue }: any) => {
  return (
    <GSLangContext.Provider value={provValue}>
      {children}
    </GSLangContext.Provider>
  );
};

export default GSLangContProv;
