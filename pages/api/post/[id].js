import db from '../../../utils/db';

export default async (req, res) => {
  const { id } = req.query;
  try {
    switch (req.method){
      case 'GET':
        const doc = await db.collection('tracks-published').doc(id).get();
        if (!doc.exists) {
          return res.status(404).end();
        } else {
          return res.status(200).json(doc.data());
        }
      case 'POST':
        return res.status(400).json({message:'forbidden'})
      case 'PUT':
        return await db.collection('tracks-published').doc(id).update({
          ...req.body,
          updated: new Date().toISOString(),
        });
      case 'DELETE':
        return await db.collection('tracks-published').doc(id).delete();
      } 
    } catch (e) {
      return res.status(400).end();
    }
}