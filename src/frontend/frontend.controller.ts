import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class FrontendController {
  @Get('/')
  @Render('layouts/pages/home')
  getHome() {
    return {
      title: 'Selamat datang Farida!',
      theme: 'dark-theme.css',
      name: 'far company',
      produkList: [
        {
          jumlah: 120,
          judul: 'KONSULTASI BISNIS',
          deskripsi: 'Solusi strategis untuk pengembangan bisnis Anda',
        },
        {
          jumlah: 85,
          judul: 'PENGEMBANGAN TEKNOLOGI',
          deskripsi: 'Inovasi digital untuk masa depan yang lebih baik',
        },
        {
          jumlah: 60,
          judul: 'MANAJEMEN PROYEK',
          deskripsi: 'Pelaksanaan proyek secara efisien dan terkontrol',
        },
      ],
      strukturOrganisasi: [
        {
          image: '/themes/default/img/gelap.png',
          title: 'Farida',
          description: 'CEO & Founder',
        },
        {
          image: '/themes/default/img/gelap.png',
          title: 'Rina',
          description: 'Head of Design',
        },
        {
          image: '/themes/default/img/gelap.png',
          title: 'Andi',
          description: 'Lead Backend Engineer',
        },
      ],
      fiturList: [
        {
          title: 'Integrasi Cepat',
          description:
            'Mudah diintegrasikan dengan sistem Anda tanpa hambatan.',
        },
        {
          title: 'Keamanan Tinggi',
          description:
            'Data Anda terlindungi dengan enkripsi dan autentikasi modern.',
        },
        {
          title: 'Dukungan 24/7',
          description: 'Tim kami siap membantu kapan pun Anda butuh.',
        },
      ],
      pricingList: [
        {
          title: 'Paket 4 Channel',
          price: 'Rp 3.400.000',
          features: [
            '4 Dahua Camera 2MP',
            '1 DVR DH-XVR4104',
            '1 HDD 500GB',
            'Free biaya pemasangan',
            'Free setting akses dari internet',
            'Free Kabel 100M',
          ],
        },
        {
          title: 'Paket 8 Channel',
          price: 'Rp 5.400.000',
          features: [
            '8 Dahua Camera 2MP',
            '1 DVR DH-XVR4108',
            '1 HDD 500GB',
            '1 PSU 12V 10A',
            'Free biaya pemasangan',
            'Free setting akses dari internet',
            'Free Kabel 200M',
          ],
        },
        {
          title: 'Paket 16 Channel',
          price: 'Rp 9.800.000',
          features: [
            '16 Dahua Camera 2MP',
            '1 DVR DH-XVR8116',
            '1 HDD 1TB',
            '1 PSU 12V 20A',
            'Free biaya pemasangan',
            'Free setting akses dari internet',
            'Free Kabel 300M',
          ],
        },
      ],
    };
  }
}
