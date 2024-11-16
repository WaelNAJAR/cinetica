import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { users } from '@/app/Repository/users'; // Assurez-vous que le tableau des utilisateurs est exporté sous `users`

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Recherche de l'utilisateur dans le tableau
  const user = users.find((u) => u.username === username);

  if (!user) {
    return NextResponse.json({ success: false, message: "Nom d'utilisateur incorrect" });
  }

  // Vérification du mot de passe haché
  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    // Connexion réussie
    return NextResponse.json({ success: true, message: "Connexion réussie" });
  } else {
    // Mot de passe incorrect
    return NextResponse.json({ success: false, message: "Mot de passe incorrect" });
  }
}
