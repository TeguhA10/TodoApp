# CRUD Todo App

Ini adalah aplikasi CRUD Todo App yang dibangun menggunakan React Native dengan Expo. Aplikasi ini menggunakan TypeScript dan Redux untuk manajemen state CRUD, serta beberapa library pendukung lainnya. Penyimpanan data dilakukan menggunakan AsyncStorage.

## Teknologi yang Digunakan
- **React Native Expo**: Platform untuk pengembangan aplikasi mobile.
- **TypeScript**: Untuk penulisan kode yang lebih terstruktur dan aman.
- **Redux**: Untuk manajemen state aplikasi.
- **AsyncStorage**: Untuk penyimpanan data lokal.

## Library yang Digunakan
- **@gorhom/bottom-sheet**: Untuk implementasi bottom sheet.
- **react-native-modal**: Untuk modal.
- **react-native-paper**: Untuk checkbox.
- **react-native-animatable** dan **react-native-reanimated**: Untuk animasi, digunakan untuk memperlihatkan perbandingan penggunaan animasi.
- **@expo/vector-icons**: Untuk ikon.
- **Jest**: Untuk unit testing, untuk mengtes jest ketikan code ini di terminal folder project.
  ```bash
  npx jest
  ```
## Fitur Animasi
- Animasi digunakan saat menambah dan menghapus data, menggunakan `react-native-animatable` dan `react-native-reanimated` untuk memperlihatkan perbandingan performa dan kemudahan penggunaannya.

## Pengalaman Pengembangan
- Pengembangan aplikasi ini dilakukan dalam satu hari menggunakan SDK terbaru dari Expo.
- Dalam proses pengembangan, terdapat beberapa kesulitan. Pengalaman pengembang lebih banyak di bagian frontend.

## Proses Instalasi
Untuk menjalankan proyek ini setelah diunduh dari GitHub, ikuti langkah-langkah berikut:

1. **Clone Repository**:
   ```sh
   git clone https://github.com/TeguhA10/TodoApp.git
   cd my-project
   ```

2. **Instalasi Dependensi**:
   Pastikan Anda telah menginstal Node.js dan npm atau yarn. Kemudian jalankan:
   ```bash
   npm install
   ```
   atau
   ```bash
   yarn install
   ```
3. **Instalasi Expo CLI**:
   Jika Anda belum menginstal Expo CLI, jalankan:
   ```bash
   npm install -g expo-cli
   ```
4. **Jalankan Proyek**:
   Untuk memulai proyek, jalankan:
   ```bash
   expo start
   ```
## Membuka Aplikasi di Perangkat atau Emulator:
- Gunakan aplikasi Expo Go pada perangkat mobile Anda (tersedia di iOS dan Android).
- Pindai kode QR yang muncul di terminal atau di browser setelah menjalankan expo start.
- Atau, jika Anda menggunakan emulator, pilih opsi untuk membuka di emulator yang sesuai.


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
