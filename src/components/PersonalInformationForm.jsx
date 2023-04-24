
import { useForm } from 'react-hook-form'
import Input, { Select } from './Input'
import { itemVariants } from '../constans/variantsForm'
import RenderConditional from './RenderConditional'
import validationPersonalInformation from '../constans/validationPersonalInformation'
import SecondaryButton from './SecondaryButton'
import useEdit from '../customHooks/useEdit'
import TypeDocumentsOptions from './TypeDocumentsOptions'
import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'

export default function PersonalInformationForm ({ user, callback, isEdit = true, submitButton }) {
  const { user: userLog } = useContext(UserContext)
  const { typeDocument, student, documentId, firstName, firstSurname, email } = user || {}
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

    const newUser = await callback(data, user, userLog.id)
    const { newStudent } = newUser?.student || {}
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
          placeholder='Brayan'
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (firstName && !edit)}
        />
        <Input
          errors={errors}
          register={register}
          name='firstSurname'
          label='First Surname'
          type='text'
          placeholder='Villamizar'
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (firstSurname && !edit)}
        />
        <RenderConditional condition={student}>
          <Input
            errors={errors}
            register={register}
            name='middleName'
            label='Middle Name'
            type='text'
            placeholder='Esteban'
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (infoStudent.middleName && !edit)}
          />
          <Input
            errors={errors}
            register={register}
            name='lastSurname'
            label='lastSurname'
            type='text'
            placeholder='Fernandez'
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (infoStudent.lastSurname && !edit)}
          />
        </RenderConditional>
        <Input
          errors={errors}
          register={register}
          name='email'
          label='Email'
          type='text'
          placeholder='Youremail@domain.com'
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (email && !edit)}
        />
        <RenderConditional condition={student}>
          <Input
            errors={errors}
            register={register}
            name='phone'
            label='Phone'
            type='text'
            placeholder='3167324940'
            variants={itemVariants}
            validation={validationPersonalInformation}
            disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (infoStudent.phone && !edit)}
          />
        </RenderConditional>
        <RenderConditional condition={documentId}>
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
        <RenderConditional condition={!documentId}>
          <Select
            errors={errors}
            name='typeDocument'
            register={register}
            variants={itemVariants}
            validation={validationPersonalInformation}
            label='Type Document'
            disabled={(!submitButton && !isEdit) || (isEdit && !edit) || (typeDocument && !edit)}
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
          placeholder='123456789'
          variants={itemVariants}
          validation={validationPersonalInformation}
          disabled={documentId}
        />
      </div>
      <RenderConditional condition={isEdit}>
        <div className='flex justify-end gap-3 mt-3'>
          {!edit
            ? <SecondaryButton variants={itemVariants} type='button' onClick={() => setEdit(true)}>Edit</SecondaryButton>
            : <>
              <SecondaryButton type='button' color='red' onClick={() => setEdit(false)}>Cancel</SecondaryButton>
              <SecondaryButton type='submit'>save</SecondaryButton>
            </>}

        </div>
      </RenderConditional>
      <RenderConditional condition={!isEdit}>
        {submitButton}
      </RenderConditional>
    </form>
  )
}
