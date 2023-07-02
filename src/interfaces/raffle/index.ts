import { StartupInterface } from 'interfaces/startup';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RaffleInterface {
  id?: string;
  startup_id?: string;
  winner_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RaffleGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
  winner_id?: string;
}
