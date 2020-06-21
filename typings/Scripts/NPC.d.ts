declare function NPCTraitSet(C: any, TraitName: any, TraitValue: any): void;
declare function NPCTraitGenerate(C: any): void;
declare function NPCTraitReverse(Trait: any): string;
declare function NPCTraitGetOptionValue(Dialog: any, NPCTrait: any): number;
declare function NPCTraitKeepBestOption(C: any, Group: any): void;
declare function NPCTraitDialog(C: any): void;
declare function NPCArousal(C: any): void;
declare function NPCTraitGet(C: any, TraitType: any): any;
declare function NPCEventAdd(C: any, EventName: any, EventValue: any): void;
declare function NPCEventDelete(C: any, EventName: any): void;
declare function NPCEventGet(C: any, EventName: any): any;
declare function NPCLongEventDelay(C: any): 86400000 | 604800000 | 259200000;
declare function NPCLongLoverEventDelay(C: any): 604800000 | 1209600000 | 2419200000;
declare function NPCLoveChange(C: any, LoveFactor: any): void;
declare function NPCInteraction(): void;
declare var NPCTrait: string[][];
