import { useForm } from 'react-hook-form'
import Input from './Input'
import { itemVariants } from '../constans/variantsForm'
import validationScores from '../constans/validationScores'
import MainButton from './MainButton'

export default function FormRegister ({ student, text = 'Update', callbackOnSubmit }) {
  const { registerNumber, saberProScore, writtenCommunication, quantitativeReasoning, readingCritical, citizenshipCompetence, english, engineeringProjectFormulation, mathematicsStatistics, softwareDesign, denied, id } = student || {}

  const { formState: { errors }, register, reset, handleSubmit } = useForm({
    defaultValues: {
      registerNumber,
      saberProScore,
      writtenCommunication,
      quantitativeReasoning,
      readingCritical,
      citizenshipCompetence,
      english,
      engineeringProjectFormulation,
      mathematicsStatistics,
      softwareDesign,
      denied
    }
  })

  const onSubmit = async (values) => {
    const newValues = Object.entries(values).map(([key, value]) => {
      let numberValue = isNaN(Number(value)) ? value : Number(value)

      if (key === 'denied') numberValue = Boolean(value)
      if (key === 'registerNumber') numberValue = String(value)

      return (
        [key, numberValue]
      )
    })

    const objectRequest = Object.fromEntries(newValues)
    const newData = await callbackOnSubmit(objectRequest, id)
    if (!newData) return
    reset({
      ...newData
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4'>
        <Input
          errors={errors}
          register={register}
          name='registerNumber'
          label='Register Number'
          type='text'
          placeholder='K-123456'
          variants={itemVariants}
          validation={validationScores}
          disabled={registerNumber}
        />
        <Input
          errors={errors}
          register={register}
          name='saberProScore'
          label='Saber Pro Score'
          type='number'
          placeholder='231'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='writtenCommunication'
          label='Written Communication'
          type='number'
          placeholder='132'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='quantitativeReasoning'
          label='Quantitative Reasoning'
          type='number'
          placeholder='253'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='readingCritical'
          label='Reading Critical'
          type='number'
          placeholder='312'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='citizenshipCompetence'
          label='Citizenship Competence'
          type='number'
          placeholder='135'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='english'
          label='English'
          type='number'
          placeholder='231'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='engineeringProjectFormulation'
          label='Engineering Project Formulation'
          type='number'
          placeholder='89'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='mathematicsStatistics'
          label='Mathematics Statistics'
          type='number'
          placeholder='291'
          variants={itemVariants}
          validation={validationScores}
          all
        />
        <Input
          errors={errors}
          register={register}
          name='softwareDesign'
          label='Software Design'
          type='number'
          placeholder='291'
          variants={itemVariants}
          validation={validationScores}
          all
        />
      </div>
      <MainButton type='sutmit' text={text} />
    </form>
  )
}
