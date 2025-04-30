/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'NEW_DATABASE_NAME';
const collection = 'NEW_COLLECTION_NAME';

// Create a new database.
use('db_kampus');

// db.createCollection("data_mahasiswa")

// db.data_mahasiswa.insertMany([{
//    nim: "22310033",
//    nama_mahasiswa: "Gym",
//    jurusan: "Teknologi Informasi",
//    alamat: "Cicurug sukabumi",
//    nomor_telp: "08567128712",
//    email: "gym@gmail.com"
// }])

// db.createCollection("data_mata_kuliah")

// db.data_mata_kuliah.insertMany([{
//      kode_mata_kuliah: "1",
//      nama_mata_kuliah: "Pengujian perangkat lunak",
//      jumlah_sks: "3"
//     }])

// db.createCollection("data_dosen")

// db.data_dosen.insertMany([{
//     nip: "27823",
//     nama_dosen: "Adit",
//     alamat: "Kp. Durian runtuh",
//     no_telp: "08923781213",
//     email: "adit@gmail.com"
// }])

// db.createCollection("data_jadwal_perkuliahan")

// db.data_jadwal_perkuliahan.insertMany([{
//     id: "002",
//     kode_mata_kuliah: "34",
//     nip_dosen_pengajar: "2",
//     hari_perkuliahan: "kamis",
//     jam_perkuliahan: "13.00 WIB",
//     ruangan_perkuliahan: "302"
// }])

// db.data_mahasiswa.insertMany([{
//     nim: "22310035",
//     nama_mahasiswa: "Ubed",
//     jurusan: "Teknologi Informasi",
//     alamat: "Cigombong sukabumi",
//     nomor_telp: "08567128713",
//     email: "ubed@gmail.com"
//  }])


// db.data_mahasiswa.updateOne(
//     { nim: "22310033" },
//     { $set: { alamat: "Jl. Baru No. 123, Sukabumi" } }
//   )

// db.data_mata_kuliah.insertMany([{
//     kode_mata_kuliah: "3",
//     nama_mata_kuliah: "Matematika",
//     jumlah_sks: "4"
//    }])

// db.data_mata_kuliah.updateMany(
//     {},
//     [
//       { $set: { jumlah_sks: { $toInt: "$jumlah_sks" } } }
//     ]
//   )
  
// db.data_mata_kuliah.find({ jumlah_sks: { $gt: 3 } })


// db.data_dosen.insertOne({
//     nip: "27824",
//     nama_dosen: "Budi",
//     alamat: "Bandung",
//     no_telp: "082134567890",
//     email: "budi@gmail.com"
// })

// db.data_dosen.updateOne(
//     { nip: "27823" },
//     { $set: { no_telp: "081234567890" } }
//   )

// db.data_jadwal_perkuliahan.deleteOne({ id: "002" })

// db.data_jadwal_perkuliahan.createIndex({ kode_mata_kuliah: 1 })

// db.data_mahasiswa.insertMany([{
//     nim: "22310033",
//     nama_mahasiswa: "Abeng",
//     jurusan: "Informatika",
//     alamat: "Cicurug sukabumi",
//     nomor_telp: "08567128712",
//     email: "abeng@gmail.com"
//  }])

// db.data_mahasiswa.find({ jurusan: "Informatika" })

// db.data_dosen.find(
//     { alamat: "Kp. Durian runtuh" },
//     { _id: 0, nama_dosen: 1, no_telp: 1 }
//   )
  

// db.data_jadwal_perkuliahan.insertMany([{
//     id: "004",
//     kode_mata_kuliah: "34",
//     nip_dosen_pengajar: "4",
//     hari_perkuliahan: "senin",
//     jam_perkuliahan: "13.00 WIB",
//     ruangan_perkuliahan: "302"
// }])

// db.data_jadwal_perkuliahan.find({ hari_perkuliahan: "senin" })

