import React from 'react'
import { MAX_SCORE } from '../constans/magicsStrings'
import { motion } from 'framer-motion'
import { variantsForm } from '../constans/variantsForm'

export default function ScoreIndividual ({ score, level, label, color }) {
  return (
    <div className='flex flex-col w-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-5 justify-between'>
      <motion.h3 variants={variantsForm} className='text-lg'>{label}</motion.h3>
      <motion.p variants={variantsForm} className='text-sm'><span className={`text-lg font-semibold ${color}`}>{score}</span>/{MAX_SCORE}</motion.p>
      <motion.p variants={variantsForm} className={color}>Level: {level}</motion.p>
    </div>
  )
}
