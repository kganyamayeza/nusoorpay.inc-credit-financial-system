export class ProfileService {
    private profiles: FinancialProfile[] = [];

    public calculateSavings(income: number, expenses: number): number {
        return income - expenses;
    }

    public fetchUserProfiles(userId: string): FinancialProfile[] {
        return this.profiles.filter(profile => profile.userId === userId);
    }

    public createProfile(profile: FinancialProfile): void {
        this.profiles.push(profile);
    }

    public updateProfile(userId: string, updatedProfile: FinancialProfile): void {
        const index = this.profiles.findIndex(profile => profile.userId === userId);
        if (index !== -1) {
            this.profiles[index] = updatedProfile;
        }
    }

    public deleteProfile(userId: string): void {
        this.profiles = this.profiles.filter(profile => profile.userId !== userId);
    }
}