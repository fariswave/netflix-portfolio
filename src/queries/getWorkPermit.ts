import { WorkPermit } from '../types';

const WORK_PERMIT_DATA: WorkPermit = {
  visaStatus: 'H-1B Visa',
  expiryDate: new Date('2026-10-01'),
  summary: 'Currently authorized to work in the United States under H-1B visa sponsorship',
  additionalInfo: 'Valid work permit allowing employment with current employer until October 2026. Can be extended upon request.'
};

export async function getWorkPermit(): Promise<WorkPermit> {
  return WORK_PERMIT_DATA;
}
