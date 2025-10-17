import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sStatus } from "@prisma/client";
import { Gender } from '@prisma/client';
import {Relationship} from '@prisma/client';

export async function POST(req: NextRequest) {  
  try {
    const formData = await req.formData();
    
    const applicationData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      singleStatusValue: formData.get('status'),
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      gender: formData.get('gender') as string,
      nationality: formData.get('nationality') as string,
      idNumber: formData.get('idNumber'),
      province: formData.get('province') as string,
      district: formData.get('district') as string,
      sector: formData.get('sector') as string,
      cell: formData.get('cell') as string,
      village: formData.get('village') as string,
      highSchool: formData.get('highSchool') as string,
      graduationYear: formData.get('graduationYear'),
      combination: formData.get('combination') as string,
      aggregateScore: formData.get('aggregateScore') as string,
      preferredUniversity: formData.get('preferredUniversity') as string,
      fatherName: formData.get('fatherName') as string,
      motherName: formData.get('motherName') as string,
      guardianPhone: formData.get('guardianPhone') as string,
      relationship: formData.get('relationship') as string,
      hasDisability: formData.get('hasDisability') as string,
      disabilityDetails: formData.get('disabilityDetails') as string
    };

    let singleStatus: sStatus;
    switch(applicationData.singleStatusValue){
      case 'SINGLE':
        singleStatus = sStatus.Single;
        break;
      case 'MARRIED':
        singleStatus = sStatus.Married;
        break;
      case 'DIVORCED':
        singleStatus = sStatus.Divorced;
        break;
      default:
        singleStatus = sStatus.Single;
    }

    let genderValue: Gender;
    switch(applicationData.gender){
      case 'male':
        genderValue = Gender.Male;
        break;
      case 'female':
        genderValue = Gender.Female;
        break;
      case 'other':
        genderValue = Gender.Other;
        break;
      default:
        genderValue = Gender.Male;
    }

    let relationshipValue: Relationship;
    switch(applicationData.relationship){
      case 'father':
        relationshipValue = Relationship.Father;
        break;
      case 'mother':
        relationshipValue = Relationship.Mother;
        break;
      case 'uncle':
        relationshipValue = Relationship.Uncle;
        break;
      case 'aunt':
        relationshipValue = Relationship.Aunt;
        break;
      case 'sibling':
        relationshipValue = Relationship.Sibling;
        break;
      case 'other':
        relationshipValue = Relationship.Other;
        break;
      default:
        relationshipValue = Relationship.Father;
    }

    const dobString = formData.get("dateOfBirth")?.toString();

    const dateOfBirth = dobString ? new Date(dobString) : undefined;

    await prisma.universityApplication.create({
      data:{
        firstName: applicationData.firstName,
        lastName: applicationData.lastName,
        singleStatus: singleStatus,
        email: applicationData.email,
        phone: applicationData.phone,
        dateOfBirth: dateOfBirth,
        gender: genderValue,
        nationality: applicationData.nationality,
        nID: Number(applicationData.idNumber),
        province: applicationData.province,
        district: applicationData.district,
        sector: applicationData.sector,
        cell: applicationData.cell,
        village: applicationData.village,
        highSchool: applicationData.highSchool,
        graduationYear: Number(applicationData.graduationYear),
        combination: applicationData.combination,
        aggregateScore: applicationData.aggregateScore,
        desiredUniveristy: applicationData.preferredUniversity,
        father: applicationData.fatherName,
        mother: applicationData.motherName,
        guardianPhone: Number(applicationData.guardianPhone),
        relation: relationshipValue,
        disability: applicationData.hasDisability === 'yes' ? true : false,
        specifyDisability: applicationData.disabilityDetails
      }
    });
    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 201 })
  } catch (error) { 
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
