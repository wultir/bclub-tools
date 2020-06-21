declare function DialogReputationLess(RepType: any, Value: any): boolean;
declare function DialogReputationGreater(RepType: any, Value: any): boolean;
declare function DialogMoneyGreater(Amount: any): boolean;
declare function DialogChangeMoney(Amount: any): void;
declare function DialogSetReputation(RepType: any, Value: any): void;
declare function DialogChangeReputation(RepType: any, Value: any): void;
declare function DialogWearItem(AssetName: any, AssetGroup: any): void;
declare function DialogWearRandomItem(AssetGroup: any): void;
declare function DialogRemoveItem(AssetGroup: any): void;
declare function DialogRelease(C: any): void;
declare function DialogNaked(C: any): void;
declare function DialogFullRandomRestrain(C: any): void;
declare function DialogLogQuery(LogType: any, LogGroup: any): boolean;
declare function DialogAllowItem(Allow: any): boolean;
declare function DialogDoAllowItem(C: any): any;
declare function DialogIsKneeling(C: any): any;
declare function DialogIsOwner(): boolean;
declare function DialogIsLover(): boolean;
declare function DialogIsProperty(): boolean;
declare function DialogIsRestrained(C: any): any;
declare function DialogIsBlind(C: any): any;
declare function DialogIsEgged(C: any): any;
declare function DialogCanInteract(C: any): any;
declare function DialogSetPose(C: any, NewPose: any): void;
declare function DialogSkillGreater(SkillType: any, Value: any): boolean;
declare function DialogInventoryAvailable(InventoryName: any, InventoryGroup: any): boolean;
declare function DialogChatRoomPlayerIsAdmin(): boolean;
declare function DialogPrerequisite(D: any): any;
declare function DialogCanUnlock(C: any, Item: any): any;
declare function DialogIntro(): any;
declare function DialogLeave(): void;
declare function DialogRemove(): void;
declare function DialogRemoveGroup(GroupName: any): void;
declare function DialogEndExpression(): void;
declare function DialogLeaveItemMenu(): void;
declare function DialogLeaveFocusItem(): boolean;
declare function DialogInventoryAdd(C: any, NewInv: any, NewInvWorn: any, SortOrder: any): boolean;
declare function DialogAlwaysAllowRestraint(): boolean;
declare function DialogMenuButtonBuild(C: any): void;
declare function DialogInventorySort(): void;
declare function DialogInventoryBuild(C: any): void;
declare function DialogFacialExpressionsBuild(): void;
declare function DialogProgressGetOperation(C: any, PrevItem: any, NextItem: any): any;
declare function DialogStruggle(Reverse: any): void;
declare function DialogProgressStart(C: any, PrevItem: any, NextItem: any): void;
declare function DialogKeyDown(): void;
declare function DialogMenuButtonClick(): void;
declare function DialogPublishAction(C: any, ClickItem: any): void;
declare function DialogItemClick(ClickItem: any): void;
declare function DialogClick(): void;
declare function DialogSetText(NewText: any): void;
declare function DialogExtendItem(Item: any, SourceItem: any): void;
declare function DialogChangeItemColor(C: any, Color: any): void;
declare function DialogDrawActivityMenu(C: any): void;
declare function DialogDrawItemMenu(C: any): void;
declare function DialogFind(C: any, KeyWord1: any, KeyWord2: any, ReturnPrevious: any): any;
declare function DialogFindAutoReplace(C: any, KeyWord1: any, KeyWord2: any, ReturnPrevious: any): any;
declare function DialogDraw(): void;
declare function DialogDrawExpressionMenu(): void;
declare function DialogSetSkillRatio(SkillType: any, NewRatio: any): void;
declare function DialogChatRoomAdminAction(ActionType: any, Publish: any): void;
declare function DialogChatRoomHasSwapTarget(): boolean;
declare var DialogText: string;
declare var DialogTextDefault: string;
declare var DialogTextDefaultTimer: number;
declare var DialogProgress: number;
declare var DialogColor: any;
declare var DialogColorSelect: any;
declare var DialogProgressStruggleCount: number;
declare var DialogProgressAuto: number;
declare var DialogProgressOperation: string;
declare var DialogProgressPrevItem: any;
declare var DialogProgressNextItem: any;
declare var DialogProgressSkill: number;
declare var DialogProgressLastKeyPress: number;
declare var DialogProgressChallenge: number;
declare var DialogInventory: any[];
declare var DialogInventoryOffset: number;
declare var DialogFocusItem: any;
declare var DialogFocusSourceItem: any;
declare var DialogFocusItemOriginalColor: any;
declare var DialogFocusItemColorizationRedrawTimer: any;
declare var DialogMenuButton: any[];
declare var DialogItemToLock: any;
declare var DialogAllowBlush: boolean;
declare var DialogAllowEyebrows: boolean;
declare var DialogAllowFluids: boolean;
declare var DialogFacialExpressions: any[];
declare var DialogItemPermissionMode: boolean;
declare var DialogExtendedMessage: string;
declare var DialogActivityMode: boolean;
declare var DialogActivity: any[];
