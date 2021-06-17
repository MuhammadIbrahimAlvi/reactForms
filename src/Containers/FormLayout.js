import React from 'react';
import './FormLayout.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '../assets/Icon.png';
import { styles } from './FormLayout.style';
import CustomInput from '../Components/Inputs/CustomInput';
import { useFormik } from 'formik';
import CustomRadio from './../Components/Radios/CustomRadios';
import CustomButton from './../Components/Buttons/CustomButton';
import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup.string()
        .max(25, 'Must be 15 characters or less').matches(/^[A-Za-z]+$/,"Name cannot contain numbers")
        .required('Required'),
    lastName: yup.string()
        .max(20, 'Must be 20 characters or less')
        .matches(/^[A-Za-z]+$/,"Name cannot contain numbers")
        .required('Required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    gender:yup.string().required('Select Gender')
});

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#E0E5EC',
        maxWidth: 580,
        margin: '0 auto',
        paddingTop: '20px',
        boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,

    },
});
const FormLayout = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values=>{
alert(JSON.stringify(values,null, 2))
        }
    });

    return (
        <div className="form-container">
            <Card className={classes.root}>
                <CardContent >
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <img src={Icon} alt="Icon Image" />
                    </Typography>
                    <Typography variant="h4" className={classes.pos} color="textSecondary">
                        PERSONAL DETAIL FORM
                    </Typography>
                    <form onSubmit={formik.handleSubmit }>
                        <CustomInput id="firstName"
                            name="firstName"
                            type="text"
                            textlabel="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}

                        />


                        <CustomInput id="lastName"
                            name="lastName"
                            type="text"
                            textlabel="Last Name"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}

                        />


                        <CustomInput id="email"
                            name="email"
                            type="email"
                            textlabel="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}

                        />


                        <CustomInput id="password"
                            name="password"
                            type="password"
                            textlabel="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <CustomRadio onChange={formik.handleChange} name="gender"  
                        onBlur={formik.handleBlur}
                        error={formik.touched.gender && Boolean(formik.errors.gender)}
                        helperText={formik.touched.gender && formik.errors.gender} />
                        <CustomButton onSubmit={formik.onSubmit}/>
                    </form>
                </CardContent>

            </Card>

        </div>
    )
}

export default FormLayout;