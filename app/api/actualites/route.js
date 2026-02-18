export async function GET() {
  return Response.json([
    {
      id: 1,
      titre: "Lancement de la plateforme digitale",
      contenu: "La mairie modernise ses services pour les citoyens."
    },
    {
      id: 2,
      titre: "Conseil municipal",
      contenu: "Réunion prévue vendredi à 10h."
    }
  ]);
}
