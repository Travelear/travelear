import db from '../../../utils/db';

export default async (req, res) => {
    try {
      const { id } = req.body;
      const entries = await db.collection('tracks-published').where('isPublic', '==', true).get();
      const entriesData = entries.docs.map(entry => entry.data());
  
      if (entriesData.some(entry => entry.id === id)) {
        res.status(400).end();
      } else {
        const { id } = await db.collection('tracks-published').add({
          ...req.body,
          timestamp: new Date().toISOString(),
        });
        res.status(200).json({ id });
      }
    } catch (e) {
      res.status(400).end();
    }
  }