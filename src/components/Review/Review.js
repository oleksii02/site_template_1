import React, {useEffect, useState} from 'react';
import './Review.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Review() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [massage, setMassage] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
  //  const [massageDirty, setMassageDirty] = useState(false)
    const [nameError, setNameError] = useState('Name cannot be empty')
    const [emailError, setEmailError] = useState('Email cannot be empty')
 //   const [massageError, setMassageError] = useState('')
    const [formValid, setFormValid] = useState(false)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect( () => {
        if(emailError || nameError){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    },[emailError, nameError])


    const nameHandler = (e) => {
        setName(e.target.value)
        if(!e.target.value){setNameError('Name cannot be empty')}
        else {setNameError('')}


    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is incorrect')
        } else {
            setEmailError('')
        }


    }
    const massageHandler = (e) => {
        setMassage(e.target.value)
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
        }

    }
    const applicationAcceptance = () => {
        const form = {
            name : name,
            email: email,
            massage: massage,
        }
        console.log(form)
        handleOpen()

    }

    return (
        <div className={'Review'} id={'process'}>

            <form className={'Form'}>
                <h5>Text review</h5>
                {[(nameError && nameDirty) ? <p className={'Error'}>{nameError}</p> : <p>Name</p>]}
                <input onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} value={name} type='text'
                       name={'name'} placeholder={'Name'}/>
                {[(emailError && emailDirty) ? <p className={'Error'}>{emailError}</p> : <p>Email</p>]}
                <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} type='text'
                       name={'email'} placeholder={'Email'}/>
                <p>Message</p>
                <textarea onChange={e => massageHandler(e)} value={massage} placeholder={'Message'}
                          className={'Message'}/>

                <button form="form-id" onClick={applicationAcceptance} disabled={!formValid} type={'submit'}>Send</button>
            </form>
            <div className={'Info'}>
                <h3>Looking for an excellent business idea?</h3>
                <h4>Give us a call or email anytime, we strive to answer all inquiries within 24 hours on business days.</h4>
                <div className={''}>
                    <span className={'background-image'}></span>
                </div>

            </div>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 5,
                    border: '2px solid #F35D5D',
                    boxShadow: 24,
                    p: 4,
                    fontFamily: 'Rubik',
                    textAlign:'center',

                    '& .MuiSvgIcon-root':{

                        color: '#F35D5D',
                        margin: '0 auto',
                        width: 300,
                        fontSize: 50,
                    },
                    '@media only screen and (max-device-width: 767px)':{
                        top: '20%',
                        left: '50%',
                        width: 250,
                        textAlign:'center',
                        p:1,
                        '& .MuiSvgIcon-root':{
                            margin: '0 auto',
                            width: 100,
                            fontSize: 30,
                        },
                    }


                }
                }>
                    <TaskAltIcon/>
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2" textAlign={'center'}>
                        Successfully
                    </Typography>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2" color={'rgba(41, 45, 50, 0.80);'}>
                        The application was successfully accepted
                    </Typography>
                </Box>
            </Modal>


        </div>
    );
}

export default Review;
