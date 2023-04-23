import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Input, { Select } from './Input'
import { UserContext } from '../providers/UserProvider'
import { itemVariants } from '../constans/variantsForm'
import RenderConditional from './RenderConditional'
import validationPersonalInformation from '../constans/validationPersonalInformation'
import SecondaryButton from './SecondaryButton'
import useEdit from '../customHooks/useEdit'
import TypeDocumentsOptions from './TypeDocumentsOptions'

export default function PersonalInformationForm ({ user, callback }) {
  const { firstName, firstSurname, email, typeDocument, documentId, student } = user
  const infoStudent = student || {}
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      ...user,
      ...infoStudent
    }
  })
  const { edit, setEdit } = useEdit(reset, user, infoStudent)

  const onSubmit = async (values) => {
    const { firstName, firstSurname, lastSurname, middleName, phone, email, documentId, typeDocument } = values
    const data = {
      userInfo: {
        firstName,
        firstSurname,
        email,
        documentId,
        typeDocument
      },
      studentInfo: {
        middleName,
        lastSurname,
        phone
      }
    }

    const newUser = await callback(data, user)
    const { newStudent } = newUser.student || {}
    reset({
      ...newUser,
      ...newStudent
    })
    setEdit(false)
  }

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)}>
      <div className='gap-3 grid md:grid-cols-2'>
        <Input
          errors={errors}
          register={register}
          name='firstName'
          label='First Name'
          type='text'
          placeholder={firstName}
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={!edit}
        />
        <Input
          errors={errors}
          register={register}
          name='firstSurname'
          label='First Surname'
          type='text'
          placeholder={firstSurname}
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={!edit}
        />
        <RenderConditional condition={student}>
          <Input
            errors={errors}
            register={register}
            name='middleName'
            label='Middle Name'
            type='text'
            placeholder={infoStudent.middleName}
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled={!edit}
          />
          <Input
            errors={errors}
            register={register}
            name='lastSurname'
            label='lastSurname'
            type='text'
            placeholder={infoStudent.lastSurname}
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled={!edit}
          />
        </RenderConditional>
        <Input
          errors={errors}
          register={register}
          name='email'
          label='Email'
          type='text'
          placeholder={email}
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={!edit}
        />
        <RenderConditional condition={student}>
          <Input
            errors={errors}
            register={register}
            name='phone'
            label='Phone'
            type='text'
            placeholder={infoStudent.phone}
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled={!edit}
          />
        </RenderConditional>
        <RenderConditional condition={user.documentId}>
          <Input
            errors={errors}
            register={register}
            name='typeDocument'
            label='Type Document'
            type='text'
            placeholder={typeDocument}
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled
          />
        </RenderConditional>
        <RenderConditional condition={!user.documentId}>
          <Select
            errors={errors}
            name='typeDocument'
            register={register}
            variants={itemVariants}
            validation={validationPersonalInformation}
            label='* Type Document'
            disabled={!edit}
          >
            <TypeDocumentsOptions />
          </Select>
        </RenderConditional>
        <Input
          errors={errors}
          register={register}
          name='documentId'
          label='Document'
          type='text'
          placeholder={documentId}
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={user.documentId}
        />
      </div>
      <div className='flex justify-end gap-3 mt-3'>
        {
        !edit
          ? <SecondaryButton variants={itemVariants} type='button' onClick={() => setEdit(true)}>Edit</SecondaryButton>
          : <>
            <SecondaryButton type='button' color='red' onClick={() => setEdit(false)}>Cancel</SecondaryButton>
            <SecondaryButton type='submit'>save</SecondaryButton>
            </>
}
      </div>
    </form>
  )
}
