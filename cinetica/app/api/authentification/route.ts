import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { user } from '@/app/Repository/user';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Vérification de l'username
  if (username !== user.username) {
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
