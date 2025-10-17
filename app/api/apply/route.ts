import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Gender, Relationship, sStatus } from '@prisma/client/edge';

export async function POST(req: NextRequest) {  
  try {
    const formData = await req.json();

    const {firstName, lastName, email, indexNumber, status, dateOfBirth, phone, gender, nationality, idNumber, province, district, sector, cell, village, highSchool, graduationYear, combination, aggregateScore, preferredUniversity, fatherName, motherName, guardianPhone, relationship, hasDisability, disabilityDetails} = formData;

    let singleStatus: sStatus;
    switch(status){
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
    switch(gender){
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
    switch(relationship){
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

    const dobString = dateOfBirth?.toString();

    const dateOfBirt = new Date(dobString);

    await prisma.universityApplication.create({
      data:{
        firstName: firstName,
        lastName: lastName,
        singleStatus: singleStatus,
        email: email,
        indexNumber: indexNumber,
        phone: phone,
        dateOfBirth: dateOfBirt,
        gender: genderValue,
        nationality: nationality,
        nID: Number(idNumber),
        province: province,
        district: district,
        sector: sector,
        cell: cell,
        village: village,
        highSchool: highSchool,
        graduationYear: Number(graduationYear),
        combination: combination,
        aggregateScore: aggregateScore,
        desiredUniveristy: preferredUniversity,
        father: fatherName,
        mother: motherName,
        guardianPhone: guardianPhone.toString(),
        relation: relationshipValue,
        disability: hasDisability === 'yes' ? true : false,
        specifyDisability: disabilityDetails
      }
    });
    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 201 })
  } catch (error) { 
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
