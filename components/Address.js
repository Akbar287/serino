import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import AddressState from "../store/AddressState";

function Address({ showAddress, setShowAddress }) {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [provinsiSelected, setProvinsiSelected] = useState({check: null})
  const [kotaSelected, setKotaSelected] = useState({check: null})
  const [kecamatanSelected, setKecamatanSelected] = useState({check: null})
  const [query, setQuery] = useState('api/daerahindonesia/provinsi')
  const [addressState, setAddressState] = useRecoilState(AddressState)
  const setAddressStateFunction = async (data) => {
    await setKecamatanSelected(data)
    await setAddressState(() => [
      {
        provinsi: provinsiSelected,
        kota: kotaSelected,
        kecamatan: kecamatanSelected
      },
    ]);
    setShowAddress(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dev.farizdotid.com/${query}`
        );
        const myData = await res.json();
        await setData(myData);
      } catch(e) {
        console.error(e)
      }
    };
    setTimeout(function() {
      setLoaded(true)
    }, 100)
    fetchData();
  }, [query]);

  return (
    <div
      className={`${
        showAddress ? "block" : "hidden"
      } transition-all duration-300 flex backdrop-filter backdrop-brightness-75 fixed top-0 h-full w-full items-center justify-center z-50`}
    >
      <div className="h-auto w-1/3 rounded-xl bg-white">
        <div className="py-4 px-8 flex items-center border-b border-gray-200">
          <div
            className="cursor-pointer"
            onClick={() => {setShowAddress(false); setProvinsiSelected({check: null}); setKotaSelected({check: null}); setKecamatanSelected({check: null}); setQuery('api/daerahindonesia/provinsi'); }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="items-center px-12 py-8">
          <div className="font-semibold text-2xl mb-7">
            {
              provinsiSelected.check == null ? 'Select provinces' : kotaSelected.check == null ? 'Select City' : 'Select Area'
            }
          </div>
          <div className="mb-30 text-xl mb-7">
            {
              provinsiSelected.check == null ? 'Where do you want to send the package?' : kotaSelected.check == null ? provinsiSelected.nama : kotaSelected.nama
            }
            
          </div>
          <input
            type="text"
            placeholder={`${provinsiSelected.check == null ? 'Select Province' : kotaSelected.check == null ? 'Select City' : 'Select Area'}`}
            className="mb-7 w-full h-16 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300 rounded-xl focus:shadow-lg text-gray-800 transition-all duration-300"
            defaultValue={(e) => setName(e.target.value)}
          />
          {
            provinsiSelected.check == null ? 
            <div className="container-list-province h-96 overflow-x-hidden overflow-y-scroll">
              { 
                loaded ? 
                data?.provinsi?.map(province => {
                  return (
                    <div
                      className="border-b border-gray-300 py-5 flex items-center cursor-pointer justify-between"
                      key={province.id} onClick={() => {setProvinsiSelected({id: province.id, nama: province.nama, check: 1}); setQuery(`api/daerahindonesia/kota?id_provinsi=${province.id}`) }}
                    >
                      <div className="text-xl font-normal ">{province.nama}</div>
                      <div className="right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  );
                })
                :
                <div>Loading</div>
              }
            </div>
            :
            kotaSelected.check == null ? 
            <div className="container-list-province h-96 overflow-x-hidden overflow-y-scroll">
              { 
                loaded ? 
                data?.kota_kabupaten?.map(kota => {
                  return (
                    <div
                      className="border-b border-gray-300 py-5 flex items-center cursor-pointer justify-between"
                      key={kota.id} onClick={() => {setKotaSelected({id: kota.id, nama: kota.nama, check: 1}); setQuery(`api/daerahindonesia/kecamatan?id_kota=${kota.id}`)}}
                    >
                      <div className="text-xl font-normal ">{kota.nama}</div>
                      <div className="right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  );
                })
                :
                <div>Loading</div>
              }
            </div>
            :
            <div className="container-list-province h-96 overflow-x-hidden overflow-y-scroll">
              { 
                loaded ? 
                data?.kecamatan?.map(kecamatan => {
                  return (
                    <div
                      className="border-b border-gray-300 py-5 flex items-center cursor-pointer justify-between"
                      key={kecamatan.id} onClick={ () => { setAddressStateFunction({id: kecamatan.id, nama: kecamatan.nama, check: 1}); }}
                    >
                      <div className="text-xl font-normal ">{kecamatan.nama}</div>
                      <div className="right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  );
                })
                :
                <div>Loading</div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Address;
