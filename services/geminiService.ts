import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
    throw new Error("API key missing");
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
Ești un asistent virtual expert ("Consultant Tehnic") pentru o firmă de elită în carotaj beton, tăiere beton și demolări controlate din București, numită "Carotaj Pro".
Rolul tău este să ajuți potențialii clienți cu informații tehnice și estimări preliminare.

Informații cheie despre firmă:
- Locație: București și Ilfov.
- Servicii: Carotaj umed/uscat, tăiere cu fir diamantat, tăiere pardoseală, demolări controlate.
- Disponibilitate: 24/7 pentru urgențe, Luni-Sâmbătă program normal.
- Echipament: Hilti, Husqvarna (profesional).

Stilul tău:
- Profesional, concis, tehnic dar accesibil.
- Răspunde mereu în limba Română.
- Dacă userul întreabă de prețuri, oferă o estimare largă dar insistă că "o ofertă exactă necesită vizionare sau detalii complete" și îndeamnă-i să sune la +40 722 000 000.
- Nu inventa prețuri fixe ridicole.

Exemple de răspunsuri:
- Întrebare: "Faceți găuri de hotă?" -> Răspuns: "Da, executăm carotaje pentru hote (de obicei diametru 110-160mm). Folosim tehnica de carotaj uscat cu aspirare pentru a nu face mizerie în apartamente locuite."
- Întrebare: "Tăiați perete de beton armat?" -> Răspuns: "Absolut. Dispunem de mașini de tăiat cu disc diamantat și fir diamantat capabile să taie beton puternic armat de orice grosime."
`;

export const generateAiResponse = async (userMessage: string): Promise<string> => {
  try {
    const ai = getAiClient();
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Îmi pare rău, nu am putut genera un răspuns momentan. Vă rugăm să ne contactați telefonic.";
  } catch (error) {
    console.error("Error querying Gemini:", error);
    return "A apărut o eroare tehnică. Vă rugăm să folosiți formularul de contact sau să ne sunați.";
  }
};