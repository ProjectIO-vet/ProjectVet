import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8">
      <header className="w-full max-w-4xl text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Witamy w e-Weterynarz</h1>
        <p className="text-lg text-gray-600">
          Szybka i wygodna rejestracja wizyt u weterynarza online.
        </p>
      </header>

      <main className="w-full max-w-4xl grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Dlaczego warto skorzystać?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Łatwa rejestracja przez internet</li>
              <li>Przypomnienia o nadchodzących wizytach</li>
              <li>Historia wizyt dostępna w panelu użytkownika</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-700 mb-4">
              Gotowy umówić wizytę? Przejdź do rejestracji już teraz.
            </p>
            <Link to="/rejestracja">
              <Button className="text-lg">Przejdź do rejestracji</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
