import { AiOutlineMenu } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import '../../../i18n';
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

const HomePage = () => {

  const {t, i18n} = useTranslation();


  return (
    <div className='flex flex-col w-screen h-screen bg-[#b7bfca]'>

        <div className="flex flex-col m-4 p-4">
          <div className="flex w-[90%] mx-auto h-16 justify-between items-center">

            <h1 className="text-3xl">{t('Dashboard User')}</h1>
            <AiOutlineMenu size={32} />
          </div>
            
        
          <div>
            <div className="flex w-[90%] mx-auto justify-between items-center mt-8">

              <div className="w-1/5 h-40 bg-white shadow-xl p-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl">{t('Earning')}</p>
                  <MdAttachMoney size={28} className="flex items-center" />
                </div>
                <div className="flex justify-start gap-x-6 text-6xl p-4">
                  <p>$</p>
                  <p>628</p>
                </div>

              </div>

              <div className="w-1/5 h-40 bg-white shadow-xl p-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl">{t('Share')}</p>
                  <BsShareFill size={28} className="flex items-center text-yellow-500" />
                </div>
                <div className="flex justify-start gap-x-6 text-6xl p-4">
                  <p>2434</p>
                </div>

              </div>

              <div className="w-1/5 h-40 bg-white shadow-xl p-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl">{t('Likes')}</p>
                  <AiFillLike size={28} className="flex items-center text-yellow-500" />
                </div>
                <div className="flex justify-start gap-x-6 text-6xl p-4">
                  <p>1259</p>
                </div>

              </div>
              <div className="w-1/5 h-40 bg-white shadow-xl p-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl">{t('Rating')}</p>
                  <AiFillStar size={28} className="flex items-center text-yellow-500" />
                </div>
                <div className="flex justify-start gap-x-6 text-6xl p-4">
                  <p>8.5</p>
                </div>

              </div>

            </div>
          </div>

        </div>
    </div>
  )
}

export default HomePage