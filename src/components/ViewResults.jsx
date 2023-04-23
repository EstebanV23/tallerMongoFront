import { motion } from 'framer-motion'
import getColor from '../constans/colorsLevels'
import { MAX_SCORE } from '../constans/magicsStrings'
import ScoreIndividual from './ScoreIndividual'
import { variantsForm } from '../constans/variantsForm'

export default function ViewResults ({ student }) {
  const { saberProScore, saberProScoreLevel, writtenCommunication, writtenCommunicationLevel, quantitativeReasoning, quantitativeReasoningLevel, readingCritical, readingCriticalLevel, citizenshipCompetence, citizenshipCompetenceLeve, english, englishLevel, engineeringProjectFormulation, engineeringProjectFormulationLevel, mathematicsStatistics, mathematicsStatisticsLevel, softwareDesign, softwareDesignLevel, englishPosition } = student
  return (
    <div>
      <div className='flex flex-col items-center gap-1 w-fit m-auto'>
        <motion.h3 variants={variantsForm} className='font-semibold text-2xl min-[480px]:text-4xl leading-none flex-wrap'>Saber Pro Score:</motion.h3>
        <motion.p variants={variantsForm} className={`text-2xl min-[480px]:text-4xl font-semibold text-${getColor(saberProScoreLevel)}`}>{saberProScore}<span className='font-normal text-slate-600 text-lg min-[480px]:text-2xl'>/{MAX_SCORE}</span></motion.p>
        <motion.p variants={variantsForm} className={`text-${getColor(saberProScoreLevel)} text-lg font-medium`}>Level: {saberProScoreLevel}</motion.p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4'>
        <ScoreIndividual variants={variantsForm} score={writtenCommunication} level={writtenCommunicationLevel} color={`text-${getColor(writtenCommunicationLevel)}`} label='Written Communication' />
        <ScoreIndividual variants={variantsForm} score={quantitativeReasoning} level={quantitativeReasoningLevel} color={`text-${getColor(quantitativeReasoningLevel)}`} label='Quantitative Reasoning' />
        <ScoreIndividual variants={variantsForm} score={readingCritical} level={readingCriticalLevel} color={`text-${getColor(readingCriticalLevel)}`} label='Reading Critical' />
        <ScoreIndividual variants={variantsForm} score={citizenshipCompetence} level={citizenshipCompetenceLeve} color={`text-${getColor(citizenshipCompetenceLeve)}`} label='Citizenship Competence' />
        <ScoreIndividual variants={variantsForm} score={english} level={englishLevel} color={`text-${getColor(englishLevel)}`} label='English' />
        <ScoreIndividual variants={variantsForm} score={engineeringProjectFormulation} level={engineeringProjectFormulationLevel} color={`text-${getColor(engineeringProjectFormulationLevel)}`} label='Engineering Project Formulation' />
        <ScoreIndividual variants={variantsForm} score={mathematicsStatistics} level={mathematicsStatisticsLevel} color={`text-${getColor(mathematicsStatisticsLevel)}`} label='Mathematics Statistics' />
        <ScoreIndividual variants={variantsForm} score={softwareDesign} level={softwareDesignLevel} color={`text-${getColor(softwareDesignLevel)}`} label='Written Communication' />
      </div>
    </div>
  )
}
