const initialState = {
  content: {
    title: "Semarang Siaga Banjir",
    paragraphs: [
      "Aplikasi Semarang Siaga Banjir adalah inovasi digital yang dirancang untuk membantu warga Kota Semarang dalam menghadapi dan mengelola risiko banjir. Dikembangkan oleh pemerintah Kota Semarang bekerja sama dengan sejumlah mitra, aplikasi ini bertujuan untuk menyediakan informasi terkini dan akurat tentang kondisi banjir di berbagai wilayah kota.",
      "Dengan adanya aplikasi Semarang Siaga Banjir, diharapkan masyarakat dapat lebih siap dalam menghadapi situasi darurat terkait banjir, mengurangi risiko, serta meningkatkan koordinasi dan respon antarwarga serta instansi terkait. Aplikasi ini merupakan langkah maju dalam upaya mitigasi bencana dan meningkatkan keselamatan serta kesejahteraan warga Kota Semarang.",
    ],
  },
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
