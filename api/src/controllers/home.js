class homeControllers {
  index(req, res) {
    res.json({
      tudocerto: true,
    });
  }
}

export default new homeControllers();
