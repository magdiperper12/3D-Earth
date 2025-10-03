'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

function Globe() {
	const { scene } = useGLTF('/image/earth.glb'); // ضع الملف داخل public/image/
	const globeRef = useRef<THREE.Object3D>(null);

	// دوران مستمر
	useFrame(() => {
		if (globeRef.current) {
			globeRef.current.rotation.y += 0.007; // سرعة الدوران
		}
	});

	return (
		<primitive
			ref={globeRef}
			object={scene}
			scale={2.5}
		/>
	);
}

export default function Landing() {
	return (
		<main className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a1c4a] to-[#01081a] text-white overflow-hidden px-4'>
			{/* اللوجو */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='text-center'>
				<Image
					src='/image/newlogo.png'
					alt='Digital Mov'
					width={260}
					height={260}
					priority
					className='mx-auto'
				/>

				<div className='flex justify-center items-center gap-2 mt-2'>
					<Image
						src='/image/smalllogo.png'
						alt='Digital Movement'
						width={30}
						height={30}
						priority
					/>
					<span className='text-cyan-400 font-semibold'>Digital Movement</span>
				</div>
			</motion.div>

			{/* الكرة */}
			<div className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] mt-6'>
				<Canvas camera={{ position: [0, 0, 6] }}>
					<ambientLight intensity={0.5} />
					<directionalLight position={[2, 2, 2]} />
					<Globe />
					<OrbitControls
						enableZoom={false}
						enableRotate
						enablePan={false}
					/>
				</Canvas>
			</div>

			{/* النص */}
			<motion.div
				className='text-center mt-6'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5 }}>
				<h2 className='text-xl sm:text-2xl md:text-3xl font-bold uppercase'>
					Empowering <br /> Your Digital <br /> Movement
				</h2>
			</motion.div>

			{/* زرار */}
			<motion.button
				className='mt-6 sm:mt-8 px-6 py-3 rounded-lg flex items-center gap-2 text-cyan-400 font-bold uppercase border border-cyan-400 hover:bg-cyan-400 hover:text-white transition text-sm sm:text-base'
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}>
				<Image
					src='/image/smalllogo.png'
					alt='Digital Mov'
					width={25}
					height={25}
					priority
				/>
				Get Started
			</motion.button>
		</main>
	);
}
