import { redirect } from 'next/navigation';
import { WORKS } from '../data';

export default function CaseStudyIndex() {
  redirect(`/pripadova-studia/${WORKS[0].id}`);
}
