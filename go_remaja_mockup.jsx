import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function GORemajaMockup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-blue-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-pink-600">GO Remaja</h1>
        <nav className="space-x-4 text-gray-700">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">Artikel</a>
          <a href="#" className="hover:text-pink-600">Kuis</a>
          <a href="#" className="hover:text-pink-600">Konsultasi</a>
          <a href="#" className="hover:text-pink-600">My Space</a>
        </nav>
      </header>

      {/* Search */}
      <div className="flex items-center max-w-md mx-auto mb-6">
        <Input placeholder="Cari artikel..." className="rounded-l-full" />
        <Button className="rounded-r-full bg-pink-500 hover:bg-pink-600">
          <Search size={18} />
        </Button>
      </div>

      {/* Banner */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Teman Sehat Remaja, Untuk Masa Depan Cemerlang
        </h2>
        <p className="text-gray-600 mt-2">
          Edukasi ramah remaja tentang kesehatan reproduksi, mental, dan gaya hidup.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-pink-600 mb-2">📚 Artikel Edukasi</h3>
            <p className="text-gray-600 mb-4">Baca informasi terpercaya tentang menstruasi, pubertas, gizi, dan kesehatan mental.</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Baca Artikel</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-pink-600 mb-2">🧠 Kuis Interaktif</h3>
            <p className="text-gray-600 mb-4">Uji pengetahuanmu tentang kesehatan remaja dan dapatkan skor!</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Mulai Kuis</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-pink-600 mb-2">💬 Konsultasi</h3>
            <p className="text-gray-600 mb-4">Ngobrol dengan konselor atau bidan secara anonim dan aman.</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Konsultasi</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-pink-600 mb-2">📌 Tips Harian</h3>
            <p className="text-gray-600 mb-4">Dapatkan tips singkat menjaga kesehatan fisik dan mentalmu setiap hari.</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Lihat Tips</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-pink-600 mb-2">🔒 My Space</h3>
            <p className="text-gray-600 mb-4">Catat siklus menstruasi, mood harian, dan jaga privasi kesehatanmu.</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Masuk</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-pink-600 mb-2">🌍 Layanan Penting</h3>
            <p className="text-gray-600 mb-4">Akses cepat ke hotline, puskesmas, dan layanan ramah remaja.</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Lihat Layanan</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
