import { StartupInterface } from 'interfaces/startup';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  startup_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
  user_id?: string;
}
