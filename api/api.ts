import axios from "axios";

// Props tipini daha açık şekilde belirtiyoruz
type Props = {
  onSet: (IData: IData[]) => void;
  search?:string
};

// Api fonksiyonu: Asenkron çalışarak veriyi alıp, state güncellemeyi sağlar
export const Api = async ({ onSet,search }: Props): Promise<void> => {
  const data = await fetchData(search||'ekler');
  onSet(data);
};

// Verinin tipi
interface IData {
  name: string;
  image_url: string;
  rating: number;
  price: string;
  is_closed: boolean;
  phone: string;
  review_count: number;
  url: string;
  location: Location;
}

// Location tipini tanımlıyoruz
type Location = {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
};

// fetchData fonksiyonu: Yelp API'sinden veri çekmek için kullanılır
const fetchData = async (search: string): Promise<IData[]> => {
  try {
    const response = await axios.get("https://api.yelp.com/v3/businesses/search", {
      headers: {
        Authorization:
          "Bearer 3T5A-vT7WGRXzDJK00p_rIvJmIdtM3sqxiDEx6JUXPKhHmLwlgpv2R8a7szR4z9sCRl37_oyUyzBfBhzt-GJi-F_vJh6-L4tKJeCVgVip-kYlP-UWtmW_1OrUImvZ3Yx",
      },
      params: {
        term: search,
        location: "İstanbul",
        limit: 20,
      },
    });

    // API'den alınan veriyi IData formatında döndürüyoruz
    const filteredData: IData[] = response.data.businesses.map((business: any) => ({
      name: business.name,
      image_url: business.image_url,
      rating: business.rating,
      price: business.price,
      is_closed: business.is_closed,
      phone: business.phone,
      review_count: business.review_count,
      url: business.url,
      location: business.location,
    }));

    return filteredData; // Veriyi döndürüyoruz
  } catch (error) {
    console.error("API Hatası:", error);
    return []; // Hata durumunda boş bir array döndürüyoruz
  }
};
