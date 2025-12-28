export interface TeamMember {
  id: number;
  fullName: string;
  role: string;
  photoUrl: string;
  shortBio: string;
  bio: string;
  location: string;
  email: string;
  telegram?: string;
  joinedAtIso: string;
  skills: string[];
  interests?: string[];
}
