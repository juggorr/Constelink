export interface RecoveryDiaryData {
  diaryId: number
  beneficiaryId : number,
  beneficiaryName: string,
  beneficiaryDisease: string,
  beneficiaryPhoto: string,
  beneficiaryAmountGoal: number,
  beneficiaryAmountRaised : number,
  beneficiaryBirthday : number,
}

export interface RecoveryDiaryDetailData {
  beneficiaryName: string,
  beneficiaryBirthday : number,
  beneficiaryDisease: string,
  beneficiaryPhoto: string,
  beneficiaryAmountRaised : number,
  beneficiaryAmountGoal: number,
  hospitalName: string,
  
  // beneficiaryDiaries
  // beneficiaryName: string,
  diaryId: number,
  beneficiaryId: number,
  diaryRegisterDate: number,
  diaryPhoto: string,
  diaryTitle: string,
  diaryContent: string,
  diaryAmountSpent: number,
}

export interface RecoveryDiaryCreate {
  beneficiaryId:Number|string;
  diaryPhoto: string,
  diaryTitle: string,
  diaryContent: string,
  diaryAmountSpent: number,
}