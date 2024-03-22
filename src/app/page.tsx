import {
	DevicePhoneMobileIcon,
	ShoppingBagIcon,
	UserIcon,
} from '@heroicons/react/24/outline'
import logo from './assets/images/vusageLogo.png'
import Image from 'next/image'

const Home: React.FC = () => {
	return (
		<div className="bg-gradient-to-b from-black to-white h-screen flex justify-center items-center  hover:shadow-lg">
			<div className="p-6 bg-white rounded-lg shadow-md mx-auto transition duration-300 ease-in-out transform hover:shadow-xl">
				<div className="flex items-center justify-center mb-8">
					<div className="w-40 h-40 flex items-center justify-center rounded-full bg-black shadow-lg">
						<Image src={logo} alt="Logo" className="h-40 w-40 " />
					</div>
				</div>
				<h2 className="text-center text-base font-semibold leading-7 text-gray-900 mb-6 ">
					Quer conferir os nossos modelos e valores?
					<br />
					Clique no link a baixo.
				</h2>
				<div className="flex items-center justify-center bg-white mb-6 shadow-lg p-2 rounded-lg pb-2.5 cursor-pointer">
					<DevicePhoneMobileIcon className="h-4 w-4 mr-2 mt-1" stroke="black" />
					<p className="text-center mt-1 text-sm leading-6 text-gray-600">
						Catalogo Online
					</p>
				</div>
				<div className="flex items-center justify-center bg-white mb-6 shadow-lg p-2 rounded-lg pb-2.5 cursor-pointer">
					<ShoppingBagIcon className="h-4 w-4 mr-2 mt-1" stroke="black" />
					<p className="text-center mt-1 text-sm leading-6 text-gray-600">
						Faça seu pedido
					</p>
				</div>
				<div className="flex items-center justify-center bg-white mb-6 shadow-lg p-2 rounded-lg pb-2.5 cursor-pointer">
					<UserIcon className="h-4 w-4 mr-2 mt-1" stroke="black" />
					<p className="text-center mt-1 text-sm leading-6 text-gray-600">
						Tabela de tamanho
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
